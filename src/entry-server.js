import { createApp } from './main.js';

export default context => {
    return new Promise((resolve, reject) => {
        const { app, router, store, meta } = createApp();

        router.push(context.url)
        context.meta = meta
        
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();
            if (!matchedComponents.length) {
                return reject({ code: 404 });
            }

            Promise.all(matchedComponents.map(Component => {
                if (Component.asyncData) {
                  return Component.asyncData({
                    store,
                    route: router.currentRoute
                  })
                }
                })).then(() => {
                    context.state = store.state
        
                    resolve(app);
                }).catch(reject)
        }, reject)
    })
}