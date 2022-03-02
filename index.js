var ghpages = require("gh-pages");

ghpages.publish(
  "_book",
  {
    branch: "main",
    repo: "https://github.com/sumeng535894711/qingniu_r_doc.git"
  },
  function(err) {
    console.log("github更新" + err);
  }
);
