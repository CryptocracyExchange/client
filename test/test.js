import React from 'react';
import { expect } from 'chai';
import chai from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import sinonChai from 'sinon-chai';
import 'babel-register';
import { jsdom } from 'jsdom';

// Components
import ExchangeRates from '../components/dash/ExchangeRates.jsx';
import Landing from '../components/Landing.jsx';
import Transaction from '../components/dash/Transaction.jsx';
import Nav from '../components/dash/Nav.jsx';
// import Dashboard from '../components/dash/Dashboard.jsx';
import GraphControls from '../components/dash/GraphControls.jsx';
import Graph from '../components/dash/Graph.jsx';
// import GraphWrapper from '../components/dash/GraphWrapper.jsx';
import TrollBox from '../components/dash/TrollBox.jsx';
import History from '../components/dash/History.jsx';
// import App from '../components/App.jsx';
// import index from '../components/index.jsx';
import Addresses from '../components/settings/Addresses.jsx';
import SettingsNav from '../components/settings/Nav.jsx';
import ResetPassword from '../components/settings/ResetPassword.jsx';
import Settings from '../components/settings/Settings.jsx';
import Transfers from '../components/settings/Transfers.jsx';

chai.use(sinonChai);
let exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

let documentRef = document;
let server = null;

describe ('<Landing />', () => {

  it('Landing Component exists', () => {
    const land = shallow(<Landing />);
    expect(land).to.exist;
  });

  it('should have landing div', () => {
    const land = shallow(<Landing />);
    expect(land.find('.landing')).to.have.length(1);
  });

  it('should have a form', () => {
    const land = shallow(<Landing />);
    expect(land.find('form')).to.have.length(1);
  });

  it('should have submitted the form and get incorrect login', (done) => {
    const output = mount(<Landing />);
    let cb = sinon.spy();
    output.setState({ username: 'nick', password: '12345'});
    output.setProps({ deep: {
        login: function(obj, cb) {
          cb();
          done();
        }
      }
    });
    output.find('form').simulate('submit');
    expect(cb).to.have.been.called;
  });

});


describe('<ExchangeRates />', () => {

  it('ExchangeRates Component exists', () => {
    const exchange = shallow(<ExchangeRates />);
    expect(exchange).to.exist;
  });

  it('does have a Row Component', () => {
    const exchange = shallow(<ExchangeRates />);
    expect(exchange.find('Row')).to.have.length(1);
  });

  it('should be a green or red arrow', () => {
    const exchange = mount(<ExchangeRates />);
    exchange.setState({ isBigger: true });
    expect(exchange.find('.percentChange').children('img')).to.have.length(1);
  });

});

// Needs tests
describe('<Transaction />', () => {
  it('Should have a test', () => {
   expect(true).to.be.true;
  });
});

// Needs tests
describe('<Nav />', () => {
  it('Should have links', () => {
    const nav = mount(<Nav />);
    expect(nav.find('a')).to.have.length(5);
  });
});

describe('<GraphControls />', () => {
  it('Should have inputs', () => {
    const gc = mount(<GraphControls />);
    expect(gc.find('Input')).to.have.length(4);
  });
});

describe('<Graph />', () => {
  it('Should have more tests', () => {
    // const graph = shallow(<Graph />);
    expect([1,2,3,4]).to.have.length(4);
  });
});

describe('<GraphWrapper />', () => {
  it('Should have more tests', () => {
    // const graph = shallow(<Graph />);
    expect([1,2,3,4]).to.have.length(4);
  });
});

describe('<Dashboard />', () => {
  it('Should have more tests', () => {
    // const graph = shallow(<Graph />);
    expect([1,2,3,4]).to.have.length(4);
  });
});

describe('<History />', () => {
  it('Should have more tests', () => {
    // const graph = shallow(<Graph />);
    expect([1,2,3,4]).to.have.length(4);
  });
});

describe('<TrollBox />', () => {
  it('Should have more tests', () => {
    // const graph = shallow(<Graph />);
    expect([1,2,3,4]).to.have.length(4);
  });
});

describe('<App />', () => {
  it('Should have more tests', () => {
    // const graph = shallow(<Graph />);
    expect([1,2,3,4]).to.have.length(4);
  });
});

describe('index', () => {
  it('Should have more tests', () => {
    // const graph = shallow(<Graph />);
    expect([1,2,3,4]).to.have.length(4);
  });
});

describe('<Addresses />', () => {
  it('Should have more tests', () => {
    // const graph = shallow(<Graph />);
    expect([1,2,3,4]).to.have.length(4);
  });
});

describe('<SettingsNav />', () => {
  it('Should have more tests', () => {
    // const graph = shallow(<Graph />);
    expect([1,2,3,4]).to.have.length(4);
  });
});

describe('<ResetPassword />', () => {
  it('Should have more tests', () => {
    // const graph = shallow(<Graph />);
    expect([1,2,3,4]).to.have.length(4);
  });
});

describe('<Settings />', () => {
  it('Should have 2 kids', () => {
    const settings = mount(<Settings />);
    settings.setProps({
      userData: {
        userID: 'Nick'
      }
    });
    expect(settings.find('.settingsBody').children()).to.have.length(2);
  });
});

describe('<Transfers />', () => {
  it('Should be able to submit transfer', (done) => {
    const transfer = mount(<Transfers />);
    transfer.setProps({
      deep: {
        event: {
          emit: function(event, obj) {
            done();
          }
        }
      }
    });
    transfer.setState({
      userID: 'Nick',
      currency: 'BTC',
      address: 'jd3hjk233kjjhjk32hkjd32khkh',
      amount: 2344223
    });
    Transfers.prototype.handleTransferClick = sinon.spy();
    transfer.find('button').simulate('click');
    expect(Transfers.prototype.handleTransferClick).to.have.been.called;
  });
});
