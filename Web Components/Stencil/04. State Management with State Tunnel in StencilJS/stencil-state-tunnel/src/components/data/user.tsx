import { h } from "@stencil/core";
import { createProviderConsumer } from "@stencil/state-tunnel";

export interface State {
	username: string;
}

export default createProviderConsumer<State>(
	{
		username: null
	},
	(subscribe, child) => (
		<context-consumer subscribe={subscribe} renderer={child} />
	)
);
