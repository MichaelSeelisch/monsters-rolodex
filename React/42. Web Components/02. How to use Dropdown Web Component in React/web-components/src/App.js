import React from 'react';

import './App.css';

import 'road-dropdown';
//  import useCustomElement from 'use-custom-element';

function App() {
    /*
        const Dropdown = ({ label, option, options, onChange }) => {
            const ref = React.createRef();

            React.useLayoutEffect(() => {
                const { current } = ref;
                current.addEventListener('onChange', customEvent =>
                    onChange(customEvent.detail)
                );
            }, [ref]);

            return (
                <road-dropdown
                    ref={ref}
                    label={label}
                    option={option}
                    options={JSON.stringify(options)}
                />
            );
        };
    */

    //  React
    const Dropdown = ({ label, option, options, onChange }) => {
        const ref = React.createRef();

        React.useEffect(() => {
            const handleChange = customEvent => onChange(customEvent.detail);

            ref.current.addEventListener('onChange', handleChange);

            return () => ref.current.removeEventListener('onChange', handleChange);
        }, []);

        return (
            <road-dropdown
                ref={ref}
                label={label}
                option={option}
                options={JSON.stringify(options)}
                onChange={onChange}
            />
        );
    };
    //   React with Hook
    /*
        const Dropdown = props => {
            const [customElementProps, ref] = useCustomElement(props);

            return <road-dropdown {...customElementProps} ref={ref} />;
        };
    */

    const props = {
        label: 'label',
        option: 'option1',
        options: {
            option1: { label: 'Option 1' },
            option2: { label: 'Option 2' },
        },
        onChange: value => console.log(value),
    };

    return (
        <div className="App">
            <Dropdown  {...props} />
        </div>
    );
}

export default App;
