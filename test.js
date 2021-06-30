const test = require('ava');
const arvishTest = require('arvish-test');

test('test', async t => {
	const arvish = arvishTest();
	const result = await arvish('node index.js 500px');

	t.deepEqual(result, [
		{
			title: '500px',
			autocomplete: '500px',
			subtitle: 'fa-500px',
			arg: 'fa-500px',
			icon: {
				path: './icons/white/500px.png'
			},
			mods: {
				alt: {
					subtitle: 'f26e',
					arg: 'f26e'
				}
			}
		}
	]);
});
