const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Commentmanage from '../commentmanage';

describe('admins.components.commentmanage', () => {

  it('Check Basic header', function(){

    const el = shallow(<Commentmanage />);
    expect(el.find('h2').text()).to.be.equal("Manage Comments");

  });
});
