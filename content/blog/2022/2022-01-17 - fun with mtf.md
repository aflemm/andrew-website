---
title: "Fun With Make the Final"
date: 2022-01-xx
type: post
draft: true
typora-root-url: ../../../static
typora-copy-images-to: ../../../static/images/blog/2022
---

# Fun With Make the Final

- Building the random post button

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>{{ block "title" . }}REDIRECT{{ end }}</title>
</head>

<body>

{{ range where $.Site.Pages "Section" "posts" }}
  {{ $.Scratch.Add "tmp" (slice .RelPermalink) }}
{{- end -}}
{{ $.Scratch.Get "tmp" | jsonify | $.Scratch.Set "tmp" }}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

<script type="text/javascript">
$(document).ready(function(){
	var post = {{ $.Scratch.Get "tmp" | safeJS }} ;
	var index = Math.floor(Math.random() * post.length);
	$(location).attr('href', post[index]);
});
</script>

</body>
</html>
```





- mtf API