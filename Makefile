FILES = README.md icon.png manifest.json gihyo.js

.PHONY: dist
default:

dist:
	rm -rf dist
	mkdir -p dist/cm-skip
	cp $(FILES) dist/cm-skip/
	cd dist && zip -r cm-skip.zip cm-skip
