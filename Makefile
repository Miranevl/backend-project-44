install: #установка зависимостей
	npm ci
brain-games:
	node bin/games/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-calc:
	node bin/games/brain-calc.js

brain-gcd:
	node bin/games/brain-gcd.js
