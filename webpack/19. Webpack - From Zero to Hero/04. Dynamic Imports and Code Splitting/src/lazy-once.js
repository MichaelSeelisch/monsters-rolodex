const outputs = [1, 2].map(modNum =>
    import(/* webpackMode: "lazy-once" */ `./module-${modNum}`).then(mod =>
        mod.default()
    )
);