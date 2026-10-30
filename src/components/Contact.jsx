import React, { useState } from 'react';

export default function Contact({ t }) {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('ArchViz (Unreal Engine / Lumion)');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMsg = message.trim();
    const subject = encodeURIComponent(`Запрос на проект: ${topic} — ${trimmedName}`);
    const bodyText = `Здравствуйте, Сергей!\n\nМеня зовут: ${trimmedName}\nИнтересующее направление: ${topic}\n\nСообщение:\n${trimmedMsg}\n\n—\nОтправлено с портфолио sergey-hvostenko.dev`;

    // Copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(bodyText).catch(() => {});
    }

    // Open mailto link
    const mailtoUrl = `mailto:hvostenkos@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;

    // Show feedback card
    const waEncoded = encodeURIComponent(
      `Здравствуйте, Сергей! Меня зовут ${trimmedName}. Тема: ${topic}.\n${trimmedMsg}`
    );
    setFeedback({
      waUrl: `https://wa.me/972546123281?text=${waEncoded}`,
      tgUrl: 'https://t.me/+972546123281',
      mailtoUrl: 'mailto:hvostenkos@gmail.com',
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-info">
            <span className="section-kicker">{t.contactKicker}</span>
            <h2 className="section-title">{t.contactTitle}</h2>
            <p className="contact-desc">{t.contactDesc}</p>

            <div className="contact-badges">
              <div className="c-badge">
                <span className="c-label">{t.contactLocLabel}</span>
                <strong>{t.contactLocValue}</strong>
              </div>
              <div className="c-badge">
                <span className="c-label">{t.contactSpecLabel}</span>
                <strong>{t.contactSpecValue}</strong>
              </div>
            </div>

            {/* Direct Contact Hub */}
            <div className="contact-direct-wrap">
              <span className="contact-direct-title">{t.contactDirectTitle}</span>
              <div className="contact-channels-grid">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/972546123281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-card channel-whatsapp"
                  aria-label="WhatsApp"
                >
                  <div className="channel-icon-wrap">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M12.031 2C6.511 2 2.025 6.486 2.025 12.006c0 1.906.536 3.737 1.554 5.323L2 22l4.823-1.528a9.948 9.948 0 0 0 5.208 1.474h.005c5.518 0 10.005-4.486 10.005-10.006C22.041 6.486 17.552 2 12.031 2zm5.836 14.199c-.244.686-1.42 1.309-1.961 1.393-.52.08-1.196.113-3.847-.981-3.385-1.397-5.568-4.829-5.738-5.056-.169-.226-1.373-1.828-1.373-3.486 0-1.658.87-2.474 1.18-2.812.308-.339.674-.424.9-.424.225 0 .45.002.648.012.21.01.49-.08.766.584.282.686.96 2.343 1.045 2.512.084.17.141.368.028.593-.113.226-.17.367-.338.564-.17.198-.357.442-.51.593-.17.17-.348.354-.15.694.198.34 1.045 1.722 2.24 2.787 1.537 1.37 2.833 1.794 3.235 1.993.402.198.636.17.872-.1.236-.269 1.015-1.185 1.286-1.59.271-.406.542-.338.9-.203.36.136 2.287 1.078 2.682 1.275.395.198.658.297.754.462.096.166.096.962-.148 1.648z" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">WhatsApp</span>
                    <span className="channel-val">+972 54 612 3281</span>
                  </div>
                  <span className="channel-action">{t.channelChat}</span>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/+972546123281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-card channel-telegram"
                  aria-label="Telegram"
                >
                  <div className="channel-icon-wrap">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">Telegram</span>
                    <span className="channel-val">+972 54 612 3281</span>
                  </div>
                  <span className="channel-action">{t.channelMsg}</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:hvostenkos@gmail.com"
                  className="channel-card channel-email"
                  aria-label="Email"
                >
                  <div className="channel-icon-wrap">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">Email</span>
                    <span className="channel-val">hvostenkos@gmail.com</span>
                  </div>
                  <span className="channel-action">{t.channelEmail}</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+972546123281"
                  className="channel-card channel-phone"
                  aria-label="Phone"
                >
                  <div className="channel-icon-wrap">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">{t.channelPhoneLabel}</span>
                    <span className="channel-val">+972 54 612 3281</span>
                  </div>
                  <span className="channel-action">{t.channelCall}</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/hvostenkos?locale=ru_RU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-card channel-facebook"
                  aria-label="Facebook"
                >
                  <div className="channel-icon-wrap">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">Facebook</span>
                    <span className="channel-val">Sergey Hvostenko</span>
                  </div>
                  <span className="channel-action">{t.channelProfile}</span>
                </a>

                {/* Flickr */}
                <a
                  href="https://www.flickr.com/photos/141428959@N04/albums"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-card channel-flickr"
                  aria-label="Flickr"
                >
                  <div className="channel-icon-wrap">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <circle cx="7" cy="12" r="5" fill="#0063dc" />
                      <circle cx="17" cy="12" r="5" fill="#ff0084" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">Flickr Albums</span>
                    <span className="channel-val">{t.flickrBadgeCount}</span>
                  </div>
                  <span className="channel-action">{t.channelGallery}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Interactive Message Builder */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">{t.formTitle}</h3>
            <div className="form-group">
              <label htmlFor="inpName">{t.formNameLabel}</label>
              <input
                type="text"
                id="inpName"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex / Александр"
              />
            </div>

            <div className="form-group">
              <label htmlFor="inpTopic">{t.formTopicLabel}</label>
              <select
                id="inpTopic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="ArchViz (Unreal Engine / Lumion)">{t.optArchViz}</option>
                <option value="Fine Art / Painting">{t.optFineArt}</option>
                <option value="AI Video & Motion">{t.optAiVideo}</option>
                <option value="3D Concept Art & GameDev">{t.optConcept}</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="inpMsg">{t.formMsgLabel}</label>
              <textarea
                id="inpMsg"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Опишите ваш проект или укажите название понравившейся работы..."
              />
            </div>

            <button type="submit" className="btn btn-gold btn-full">
              <span>{t.formSubmitBtn}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>

            {feedback && (
              <div className="form-feedback-card">
                <p className="feedback-msg">
                  <strong>{t.formCopiedMsg}</strong>
                  <br />
                  Текст запроса скопирован. Вы также можете отправить его напрямую в мессенджер:
                </p>
                <div className="feedback-quick-actions">
                  <a
                    href={feedback.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-wa-accent"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12.031 2C6.511 2 2.025 6.486 2.025 12.006c0 1.906.536 3.737 1.554 5.323L2 22l4.823-1.528a9.948 9.948 0 0 0 5.208 1.474h.005c5.518 0 10.005-4.486 10.005-10.006C22.041 6.486 17.552 2 12.031 2zm5.836 14.199c-.244.686-1.42 1.309-1.961 1.393-.52.08-1.196.113-3.847-.981-3.385-1.397-5.568-4.829-5.738-5.056-.169-.226-1.373-1.828-1.373-3.486 0-1.658.87-2.474 1.18-2.812.308-.339.674-.424.9-.424.225 0 .45.002.648.012.21.01.49-.08.766.584.282.686.96 2.343 1.045 2.512.084.17.141.368.028.593-.113.226-.17.367-.338.564-.17.198-.357.442-.51.593-.17.17-.348.354-.15.694.198.34 1.045 1.722 2.24 2.787 1.537 1.37 2.833 1.794 3.235 1.993.402.198.636.17.872-.1.236-.269 1.015-1.185 1.286-1.59.271-.406.542-.338.9-.203.36.136 2.287 1.078 2.682 1.275.395.198.658.297.754.462.096.166.096.962-.148 1.648z" />
                    </svg>
                    <span>В WhatsApp</span>
                  </a>
                  <a
                    href={feedback.tgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-tg-accent"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
                    </svg>
                    <span>В Telegram</span>
                  </a>
                  <a href={feedback.mailtoUrl} className="btn btn-sm btn-outline">
                    <span>Открыть Почту</span>
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
