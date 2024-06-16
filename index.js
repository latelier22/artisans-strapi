// index.js
// export { default as ExampleComponent } from './components/ExampleComponent';
// export { greet } from './functions/utility';
import Card from './dist/Card';
import Gallery from './dist/component/gallery/Gallery'

export {Card, Gallery}

import  fetchFiles, {transformResponse} from "./dist/component/fetchFiles"

export { fetchFiles, transformResponse}