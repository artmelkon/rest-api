exports.getPosts = ( req, res, nex ) => {
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is the first Post!" }]
  });
};

exports.createPost = ( req,res, next ) => {
  // create post in db
  const title = req.body.title;
  const content = req.body.content;
  // console.log(title, content)

  res.status(201).json({
    message: "post created successfully",
    post: { id: new Date().toISOString(), title: title, content: content }
  });
}
