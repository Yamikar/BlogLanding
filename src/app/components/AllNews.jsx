import React from "react";
import MınıCard from "./MınıCard";
import Link from "next/link";
import Image from "next/image";
/*----------------------------------------------------*/
/*image import is here */

/*------------------------------------------------*/

function AllNews() {
  return (
    <div className="px-1">
      <div className="flex flex-col lg:flex-row lg:justify-center gap-6 mt-6">
        <MınıCard
          image={deneme}
          title="Frontend Enginner Document"
          tag="website"
          content="There is good content on medium and website about modern frontend technologies that I follow"
        />
        <MınıCard
          image={ımage2}
          title="How to Make Your Website Load in Under 1 Second"
          tag="Medium Write"
          content="Ever waited for a website to load and felt your soul slowly leave your body? Yeah, me too."
        />
        <MınıCard
          image={ımage3}
          title="How to read Medium posts for free"
          tag="Link"
          content="how to read premium content on this site for free link to the website"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-6 mt-6">
        <MınıCard
          image={ımage4}
          title="4 GitHub Tricks That Make me SuperDev 🧑‍💻and 100x Productive"
          tag="Medium Write"
          content=""
        />
        <MınıCard
          image={ımage5}
          title="UI Design Trends In 2025"
          tag="Medium Write"
          content="it was a blog post that interested me"
        />
        <MınıCard
          title="Modern Color Management in CSS: Creating Dynamic, Accessible Color Schemes in 2025
"
          image={ımage1}
          tag="Medium Write"
          content="The Color Revolution in CSS"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center gap-6 mt-6">
        <MınıCard
          image={ımage2}
          title="5 Modern CSS Styles You Should Know In 2024"
          tag="Medium Write"
        />
        <MınıCard
          image={ımage3}
          title="Onur dayıbaşı"
          tag="Medium Writer"
          content="a developer who writes nice articles about frontend development in Turkish"
        />
        <MınıCard
          image={ımage4}
          title="16 Free Resources You Should Know for Design Inspiration"
          tag="Medium Write"
          content="Discover these 16 free resources for design inspiration. Explore Ul, web, and graphic design ideas to fuel your creativity!"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-6 mt-6">
        <MınıCard
          image={ımage5}
          title="Top 10 UI/UX Design Principles Every Designer Should Follow"
          tag="Medium Write"
        />
        <MınıCard
          image={ımage1}
          title="Does Cursor Al Help with UI/UX Design?"
          tag="Medium Write"
          content="Al-powered tools are transforming the way designers approach UI/UX design, streamlining workflows, automating repetitive..."
        />
        <MınıCard
          image={ımage2}
          title="10 UI/UX design trends dominating 2025"
          tag="Medium Write"
          content=" From timeless minimalism to futuristic 3D immersion-discover the styles that will define user experience..."
        />
      </div>
    </div>
  );
}

export default AllNews;
