# Travel Animation for Webflow

This is a lightweight, SVG-based animation sequence for your travel website. The animation shows a book flipping through pages, transforming into a globe with flying planes, and finally displaying travel information tiles with a signup form.

## Features

- Clean, line-drawn animation style with rich colors
- Fast loading and performance optimized
- Responsive design that works on all devices
- No external dependencies
- Easy to integrate with Webflow

## How to Add to Webflow

### Method 1: Using Embed Code

1. In Webflow, add an "Embed" element where you want the animation to appear
2. Copy the entire contents of `index.html`, `styles.css`, and `animation.js` into the embed code
3. Combine them as follows:

```html
<style>
  /* Paste the contents of styles.css here */
</style>

<!-- Paste the contents of index.html here (without the head and script tags) -->

<script>
  /* Paste the contents of animation.js here */
</script>
```

### Method 2: Using External Files

1. Upload the CSS and JS files to your Webflow project assets
2. In your Webflow site settings, go to "Custom Code" section
3. In the "Head Code" section, add:
   ```html
   <link rel="stylesheet" href="[Your CSS Asset URL]">
   ```
4. In the "Footer Code" section, add:
   ```html
   <script src="[Your JS Asset URL]"></script>
   ```
5. Add the HTML content from `index.html` to your page using an "Embed" element

## Publishing with GitHub Pages

### Step 1: Create a GitHub Repository

1. Log in to your GitHub account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "travel-animation")
4. Add a description (optional)
5. Choose "Public" visibility
6. Click "Create repository"

### Step 2: Initialize and Push Your Code

Open your terminal and run the following commands in your project directory:

```bash
# Initialize a git repository
git init

# Add all files to the repository
git add .

# Commit your changes
git commit -m "Initial commit"

# Add your GitHub repository as a remote
git remote add origin https://github.com/YOUR_USERNAME/travel-animation.git

# Push your code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for your site to be published
7. Your site will be available at: https://YOUR_USERNAME.github.io/travel-animation/

### Step 4: Verify Deployment

1. Visit the URL provided in the GitHub Pages section
2. Ensure all features are working correctly
3. Test on different devices and browsers

## Customization

### Changing Colors

- Edit the CSS variables at the top of the `styles.css` file
- Main colors are defined using hex codes (#3498db, #2980b9, etc.)

### Changing Animation Speed

- Adjust the timing values in the `TIMINGS` object at the top of `animation.js`
- Lower values will make the animation faster

### Changing Content

- Edit the text in the tiles section of `index.html`
- Modify the form fields as needed

## Performance Notes

- The animation is optimized for performance using:
  - SVG graphics instead of raster images
  - CSS transforms instead of position changes
  - Minimal JavaScript
  - Optimized animation timing

## Browser Compatibility

- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 is not supported

## Need Help?

If you need any assistance integrating this animation into your Webflow site or customizing it further, please reach out for support.
