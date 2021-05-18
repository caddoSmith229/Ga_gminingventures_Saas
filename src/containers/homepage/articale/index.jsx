import React from "react";
import { Link } from "gatsby";

import * as styles from "./index.module.scss";

const MarketingPosition = ({ quickLinks, news }) => {
  return (
    <section className="intro-section py-4 lg:py-12">
      <div className="max-w-6xl mx-auto">
        <div class="grid gap-x-24 gap-y-8 grid-cols-1  sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-3 p-4">
          <div className="col-span-2">
            <h2 className="text-2xl text-secondary uppercase pb-2">
              New Releases
            </h2>

            <div class="grid gap-4 grid-cols-1  sm:grid-cols-2 xl:grid-cols-2 md:grid-cols-2">
              {news.edges
                .slice(0, 4)
                .map(({ node: { content, ctaLink, ctaText, title, date } }) => {
                  return (
                    <div class={`${styles.articleContainer} rounded p-6`}>
                      <h2 className="text-primary  font-medium text-lg">
                        {title}
                      </h2>
                      <p className="uppercase text-sm py-4 text-gray-600">
                        {date}
                      </p>
                      <Link
                        className="text-secondary underline uppercase text-sm font-bold"
                        to={ctaLink}
                      >
                        {ctaText}
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-2xl text-secondary uppercase pb-2">
              {quickLinks.title}
            </h2>
            <div className="border-secondary border-b border-solid mb-2"></div>

            {quickLinks.quickLinks.items.map((v, i) => {
              return (
                <Link
                  className="text-primary uppercase text-sm font-semibold	block my-4"
                  to={v.link}
                >
                  {v.title}
                </Link>
              );
            })}

            <p className="py-5">{quickLinks.content}</p>
            <button className={`${styles.seeMoreBtn} p-3 uppercase rounded`}>
              <Link href={quickLinks.ctaLink}>{quickLinks.ctaText}</Link>
            </button>
          </div>
        </div>
        <div class="flex flex-wrap p-4"></div>
      </div>
    </section>
  );
};

export default MarketingPosition;
