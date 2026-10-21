function BookSection({ book }) {
  return (
    <section className="blog-post__book">
      <h3 className="blog-post__book-heading">
        {book.number}. {book.heading}
      </h3>
      <div className="blog-post__book-body">
        {book.covers ? (
          <div className="blog-post__book-covers">
            {book.covers.map((cover) => (
              <img
                className="blog-post__book-cover"
                src={cover.src}
                alt={cover.alt}
                loading="lazy"
                key={cover.src}
              />
            ))}
          </div>
        ) : (
          <img
            className="blog-post__book-cover"
            src={book.cover}
            alt={book.coverAlt}
            loading="lazy"
          />
        )}
        <div className="blog-post__book-text">
          {book.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function NumberedBooksPostBody({ post }) {
  return (
    <article className="blog-post blog-post--books" aria-labelledby="blog-post-title">
      <h1 id="blog-post-title" className="blog-post__title blog-post__title--single">
        {post.title}
      </h1>

      <div className="blog-post__intro">
        {post.intro.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>

      <div className="blog-post__books">
        {post.books.map((book) => (
          <BookSection key={book.number} book={book} />
        ))}
      </div>

      <div className="blog-post__looking-back">
        <h2>{post.lookingBack.heading}</h2>
        {post.lookingBack.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>

      <div className="blog-post__question">
        <h2>
          {post.question.heading.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p>{post.question.text}</p>
      </div>

      <section className="blog-read-more" aria-label={post.readMore.label}>
        <h2>{post.readMore.label}</h2>
        <div className="blog-read-more__grid">
          {post.readMore.items.map((item, index) => (
            <a className="blog-read-more__card" href={item.href} key={`${item.href}-${index}`}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <span>{item.caption}</span>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
