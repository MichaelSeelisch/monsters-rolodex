import { Component, h } from "@stencil/core";
import Tunnel from "../data/user";

@Component({
	tag: "app-root",
	styleUrl: "app-root.css"
})

export class AppRoot {
	render() {
		const state = {
			username: "Josh"
		};

		return (
			<div>
				<header>
					<h1>Stencil App Starter</h1>
				</header>

				<main>
					<stencil-router>
						<Tunnel.Provider state={state}>
							<stencil-route-switch scrollTopOffset={0}>
							<stencil-route url='/' component='app-home' exact={true} />
							<stencil-route url='/profile/:name' component='app-profile' />
							</stencil-route-switch>
						</Tunnel.Provider>
					</stencil-router>
				</main>
			</div>
		);
	}
}