import wrapReactLifecycleMethods, { config } from 'react-component-errors';

@wrapReactLifecycleMethods;
const Evil = () => (
    <div>
        Evil
        { this.does.not.exist }
    </div>
);

config.errorHandler = errorReport => {
    // Do nothing...
};

export default Evil;