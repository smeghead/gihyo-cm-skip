FILES = README.md icon.png manifest.json gihyo.js

.PHONY: dist
default:

dist:
	rm -rf dist
	mkdir -p dist/gihyo-cm-skip
	cp $(FILES) dist/gihyo-cm-skip/
	cd dist && zip -r gihyo-cm-skip.zip gihyo-cm-skip
