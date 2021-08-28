const withImages = require('next-images')
module.exports = withImages({
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
      'ibb.co',
      'tinyurl.com'
    ],
  },
});
