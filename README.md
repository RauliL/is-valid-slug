# is-valid-slug

Tests whether an string is considered to be valid URL slug or not. While there
is no "official" specification on what is considered to be an URL slug, this
package uses commonly used [regular expression] for the validation.

[regular expression]: https://ihateregex.io/expr/url-slug/

## Usage

```TypeScript
import { isValidSlug } from 'is-valid-slug';

isValidSlug('this-is-valid');     // => true
isValidSlug('@this;is invalid');  // => false
```
