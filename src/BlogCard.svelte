<script>

</script>


<article class="blog-card">
    <img src="./images/bson.jpg" alt="Profile of Creator" height='200px'>
    <h3 class='blog-headline'>
        <a href="#" class='headline-link'>
            <slot>Article Headline</slot>
        </a>
    </h3>
    <p class="blogPreview">
        <slot>Here's a preview of the content within this article</slot>
    </p>
</article>


<svg class="svgClip postClip" height="0" width="0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" stroke-linejoin="round">
    <defs>
        <clipPath id="profilePicClip" clipPathUnits="objectBoundingBox">
        <path d="M0.462,0.016 C0.472,0.006,0.486,0,0.5,0 C0.514,0,0.528,0.006,0.538,0.016 C0.635,0.112,0.888,0.365,0.984,0.462 C0.994,0.472,1,0.486,1,0.5 C1,0.514,0.994,0.528,0.984,0.538 C0.888,0.635,0.635,0.888,0.538,0.984 C0.528,0.994,0.514,1,0.5,1 C0.486,1,0.472,0.994,0.462,0.984 C0.365,0.888,0.112,0.635,0.016,0.538 C0.006,0.528,0,0.514,0,0.5 C0,0.486,0.006,0.472,0.016,0.462 C0.112,0.365,0.365,0.112,0.462,0.016"/>
        </clipPath>
    </defs>
 </svg>

<style>

    .blog-card {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-around;
        padding: 1em;
        background-color: #3b3638;
        border-radius: 12px;
    }

    img {
        clip-path: url(#profilePicClip);
        align-self: center;
    }

    .blog-headline {
        font-size: 1.5em;
    }

    .headline-link {
        color: var(--begotten-red);

    }

    .headline-link:hover {
        color: #e0728e;
        text-decoration: none;
    }

    .blogPreview {
        align-self: center;
        max-width: 55ch;
    }

</style>