import Loadable from 'react-loadable';
import Loader from '../components/Shared/Loader';

export default Component =>
    Loadable({
        loader: Component,
        loading: Loader,
        delay: 300,
        timeout: 100,
    });
