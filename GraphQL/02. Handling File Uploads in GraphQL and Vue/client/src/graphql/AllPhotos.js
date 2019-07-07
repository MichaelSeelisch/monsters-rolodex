import gql from 'graphql-tag';

export default gql`query allPhotos {
    allPhotos {
        filename
        path
    }
}`;
