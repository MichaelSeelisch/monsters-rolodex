import test from 'tape';

import { searchService } from '../../source/service//index.js';

test('A passing test', (assert) => {
  searchService.get('Understanding SoundEx Algorithms')
    .then((result) => {
      assert.equals(result[0].title,
        'Understanding SoundEx Algorithms',
        'Exact match found for \'Understanding SoundEx Algorithms\'');
      assert.end();
    });
});