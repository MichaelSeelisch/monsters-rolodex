<template>
    <div class='page'>
        <h1 class='text-center'>Images</h1>
        <div class='clearfix'>
            <b-button-toolbar class='button-toolbar float-left'>
                <input type='file' style='display: none' ref='file' @change='onChangeFileUpload($event)' />
                <b-button variant='primary' @click='$refs.file.click()'>Upload Images</b-button>
            </b-button-toolbar>
            <img ref='image' :src='form.image' class='photo float-left' />

        </div>
        <div v-if='loaded'>
            <b-card v-for='(img, index) in images' :key='img.id'>
                <div class='row'>
                    <div class='col-md-6'>
                        <img :src='img.image' img-alt='Image' class='photo' :ref='`photo-${index}`' />
                    </div>
                    <div class='col-md-6'>
                        <h3>Faces</h3>
                        <b-list-group>
                            <b-list-group-item v-for='(d, i) of img.detections' :key='i'>
                                <h4>Face {{i + 1}}</h4>
                                <ul class='detection'>
                                    <li>Age: {{d.age.toFixed(0)}}</li>
                                    <li>Gender: {{d.gender}}</li>
                                    <li>Gender Probability: {{(d.genderProbability*100).toFixed(2)}}%</li>
                                    <li>
                                        Expressions:
                                        <ul>
                                            <li
                                            v-for='key of Object.keys(d.expressions)'
                                            :key='key'
                                            >{{key}}: {{(d.expressions[key]*100).toFixed(2)}}%</li>
                                        </ul>
                                    </li>
                                </ul>
                            </b-list-group-item>
                        </b-list-group>
                    </div>
                </div>
                <br />
                <b-button variant='primary' @click='detectFace(index)'>Detect Face</b-button>
                <b-button variant='danger' @click='deleteOneImage(img.id)'>Delete</b-button>
            </b-card>
        </div>

        <div v-else>
            <p>Loading image data...</p>
        </div>
    </div>
</template>

<script>
    import * as faceapi from 'face-api.js';

    import { requestsMixin } from '@/mixins/requestsMixin';

    const axios = require('axios');

    const WEIGHTS_URL = 'http://localhost:8081/';

    export default {
        name: 'home',
        mixins: [requestsMixin],
        computed: {
            images() {
            return this.$store.state.images;
            }
        },
        async beforeMount() {
            await faceapi.loadTinyFaceDetectorModel(WEIGHTS_URL);
            await faceapi.loadFaceLandmarkTinyModel(WEIGHTS_URL);
            await faceapi.loadFaceLandmarkModel(WEIGHTS_URL);
            await faceapi.loadFaceRecognitionModel(WEIGHTS_URL);
            await faceapi.loadFaceExpressionModel(WEIGHTS_URL);
            await faceapi.loadAgeGenderModel(WEIGHTS_URL);
            await faceapi.loadFaceDetectionModel(WEIGHTS_URL);
            await this.getAllImages();
            this.loaded = true;
        },
        data() {
            return {
                form: {},
                loaded: false
            };
        },
        methods: {
            async deleteOneImage(id) {
                await this.deleteImage(id);

                this.getAllImages();
            },

            async getAllImages() {
                const { data } = await this.getImages();

                this.$store.commit('setImages', data);

                if (this.$refs.file) {
                    this.$refs.file.value = '';
                }
            },

            onChangeFileUpload($event) {
                const file = $event.target.files[0];
                const reader = new FileReader();

                reader.onload = async () => {
                    this.$refs.image.src = reader.result;
                    this.form.image = reader.result;

                    await this.addImage(this.form);

                    this.getAllImages();
                    this.form.image = '';
                };
                reader.readAsDataURL(file);
            },

            async detectFace(index) {
                const input = this.$refs[`photo-${index}`][0];
                const options = new faceapi.TinyFaceDetectorOptions({
                    inputSize: 128,
                    scoreThreshold: 0.3
                });
                const detections = await faceapi
                    .detectAllFaces(input, options)
                    .withFaceLandmarks()
                    .withFaceExpressions()
                    .withAgeAndGender()
                    .withFaceDescriptors();

                this.images[index].detections = detections;

                await this.editImage(this.images[index]);

                this.getAllImages();
            }
        }
    };
</script>

<style>
    .photo {
    max-width: 200px;
    margin-bottom: 10px;
    }
</style>