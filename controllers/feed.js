exports.getPosts = ( req, res, nex ) => {
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is the first Post!" }]
  });
};
