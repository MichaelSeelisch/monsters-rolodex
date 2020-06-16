import { Component, Prop, Element, h } from '@stencil/core';
import Tunnel from '../data/user';

@Component({
	tag: 'app-profile',
	styleUrl: 'app-profile.css',
	shadow: true
})

export class AppProfile {
	@Element() el: AppProfile
	@Prop() username: string

	render() {
		return (
			<div class="app-profile">
				<p>
				Hello! My name is {this.username}. My name was passed in
				through a Stencil Tunnel State!
				</p>
			</div>
		);
	}
}

Tunnel.injectProps(AppProfile, ['username']);
