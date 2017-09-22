import location from '../-private/mock/location';

const MockWindow = new Proxy(window, {
  get(receiver, name) {
    switch (name) {
      case 'location':
        return location;
    }
  }
});

export default MockWindow;
