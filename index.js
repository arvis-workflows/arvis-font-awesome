'use strict';
const arvish = require('arvish');
const Color = require('color');
const path = require('path');
const sep = path.sep;

const url = 'http://m19dxw5x0q-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%203.13.1&x-algolia-application-id=M19DXW5X0Q&x-algolia-api-key=c79b2e61519372a99fa5890db070064c';

// Determine the iconset depending on the background color

// const background = new Color(arvish.alfred.themeBackground);
// const iconset = background.light() ? 'black' : 'white';

const iconset = 'white';

arvish
	.fetch(url, {
		method: 'POST',
		json: true,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: {requests:[{indexName:"font_awesome",params:`query=${arvish.input}&page=0&facets=%5B%5D&tagFilters=&hitsPerPage=50`}]}
	})
	.then(data => {
		const items = data.results[0].hits.map(x => {
			return {
				title: x.name,
				autocomplete: x.name,
				subtitle: `${x.css_class}`,
				arg: x.css_class,
				icon: {
					path: `.${sep}icons${sep}${iconset}${sep}${x.name}.png`
				},
				mods: {
					alt: {
						subtitle: x.unicode,
						arg: x.unicode
					}
				}
			};
		});

		arvish.output(items);
	});
