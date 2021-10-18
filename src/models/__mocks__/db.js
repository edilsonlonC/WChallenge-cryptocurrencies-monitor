export const Database = jest.fn();


const mock = jest.fn().mockImplemetation( () => {
    return { db: { }}
})