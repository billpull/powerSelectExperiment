import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RepoSearch extends Component {
  @action
  setSelected() {
    // Pass up to the filtering
  }

  @action
  searchRepo(term) {
    // Populates dropdown
    let url = `https://api.github.com/search/repositories?q=${term}`;
    return fetch(url).then((resp) => resp.json()).then((json) => json.items);
  }
}