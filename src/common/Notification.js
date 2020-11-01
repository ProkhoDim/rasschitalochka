import { toast } from 'react-toastify';

export default (type, text, closeDelay = 1500) =>
  toast[type](text, {
    position: 'top-right',
    autoClose: closeDelay,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
