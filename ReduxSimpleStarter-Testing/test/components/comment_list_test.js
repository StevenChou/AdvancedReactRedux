import { renderComponent, expect } from './../test_helper';
import CommentList from './../../src/components/comment_list';

describe('CommentList', () => {
  let component;
  // run before any of our statement and it's going to run before each of them runs.
  beforeEach(() => {
    const props = {
      comments: ['comment1', 'comment2']
    };
    // actually return jquery obj
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('comment1');
    expect(component).to.contain('comment2');
  });
});
