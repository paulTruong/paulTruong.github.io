---
layout: posts
title:  "How to: Build a underline on hover animation using CSS"
date:   2018-01-06
categories: 
  - Web development
  - CSS
isWork: false
---
This tutorial will teach you how to code your own underline on hover animation. The animation you'll be learning is exactly the same one I use on this very site. Here is what we'll be building.

<p data-height="273" data-theme-id="0" data-slug-hash="8701f749e1348da1ce2d99057710c733" data-default-tab="result" data-user="ptruong" data-embed-version="2" data-pen-title="Underline Animation" class="codepen">See the Pen <a href="https://codepen.io/ptruong/pen/8701f749e1348da1ce2d99057710c733/">Underline Animation</a> by Paul Truong (<a href="https://codepen.io/ptruong">@ptruong</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

We'll code the animation using just HTML and CSS, no Javascript needed. I am hoping by the end of this, you'll learn a little more about CSS animation and CSS pseudo-element. And that you'll have something you can use in your future projects.

Let's begin.

## Step 1: Building the navigation.

The first step is to build simple navigation with some basic styles applied. We also add the ```.underline``` class to our links because that's what we'll be styling in later on.

#### HTML
{% highlight html %}
<nav>
  <ul>
    <li><a class="underline" href="#">Home</a></li>
    <li><a class="underline" href="#">About</a></li>
    <li><a class="underline" href="#">Contact</a></li>
  </ul>
</nav>
{% endhighlight %}

#### CSS
{% highlight css %}
li {
  display: inline;
  margin: 10px;
  font-size: 2rem;
}
{% endhighlight %}

## Step 2: Build out the underline

We're using the ```::after``` CSS pseudo-elemment here. ```::after``` inserts content (that we define) after the selected element. In our case, we will tie it to the ```.underline``` class and it will be used to build the underline.

#### CSS
{% highlight css %}

.underline {
  position:relative;
}

.underline::after {
  height: 5px;
  position: absolute;
  content: "";
  background-color: red;
  width: 0;
  bottom: 0;
  right: 0;
  margin-top: 2px;
}

{% endhighlight %}

We set ```.underline``` to ```position:relative``` and ```.underline::after``` to ```position:absolute``` in order to position the underline underneath the link. The width is set to zero because we dont want to show this until we hover.

Another curious tidbit is ```right:0```. This is actually the end point for the animation. Keep an eye on this, it'll make a lot more sense later on.

## Step 3: Building our hover state.

To make our underline appear we set the width to 100%. We set the underline to ```left:0``` because that is where we want the line to start animating from. Along with ```right:0```, this is the magic sauce that makes the line animate from left to right. 

This is because the animation starts when we hover on the link, on hover the line is set to the left as it expands to the right. When we stop hovering the line shrinks from the left, ending on the right. We'll see this in action when we animate.

#### CSS
{% highlight css %}

.underline:hover::after {
  width: 100%;
  left: 0;
}

{% endhighlight %}

At this point the underline will appear on hover but it won't be animated until we apply the CSS transition properties to it.

## Step 4: Add the transitions

The CSS for our transition looks a bit like this 

{% highlight css %}
  transition: width 0.5s ease;
{% endhighlight %}

We will apply the transition property to the element we want to animate. In our case it is ```underline::after```. So lets add it, including the vendor prefixes, to make sure it works in as many browsers as possible.

#### CSS
{% highlight css %}
.underline::after {
  -webkit-transition: width 0.5s ease;
  -moz-transition: width 0.5s ease;
  -o-transition: width 0.5s ease;
  -ms-transition: width 0.5s ease;
  transition: width 0.5s ease;

  height: 5px;
  position: absolute;
  content: "";
  background-color: red;
  width: 0;
  bottom: 0;
  right: 0;
  margin-top: 2px;
}
{% endhighlight %}

The transition property takes three values, the affected property, it's duration, and the timing. In our case we set the animated property to the width because that's all we need to animate. The animation will go for half a second and the timing is set to ease, which means it'll start slow, go fast then end slow.

## That's it!

After following all of the steps above, you should have a nice little hover animation that you can use in your future products. I highly encourage you not to stop here, go and discover more, play around and really get creative with this.

### Further Reading

This post is a good place to start if you want to dip your toes into the world of CSS animations and CSS pseudo-elements. However if you want to go dig deeper, here a few resources that you can go to.

*  <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions>
*  <https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements>
*  [Designing Interface Animation by Val Head](http://rosenfeldmedia.com/books/designing-interface-animation/) - Highly recommended for anyone serious about animation in the digital space, especially on the web.