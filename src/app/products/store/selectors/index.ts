export * from './pizzas.selectors';
export * from './toppings.selectors';


export const sortByType = (array: Array<any>, type: string, desc?: boolean | 'desc') => {
    const compare = (a: Object, b: Object) => a[type].localeCompare(b[type])
    if(desc) return array.sort(compare).reverse()
    else return array.sort(compare)
}