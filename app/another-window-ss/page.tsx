import React from 'react';
import MeChat from '@/components/MeChat';
import GptChat from '@/components/GptChat';
import AgentChat from '@/components/AgentChat';
import Link from 'next/link';

const anotherWindow = () => {
    return (
        <div>
            <h1 className="font-sans font-bold text-2xl pb-4">Another Window</h1>
            <h2 className='font-sans text-sm pb-4'>A young boy is sent into space for Flat Earth converstion therapy. A short science fiction written with GPT-3. </h2>
            {/* You can read the final version <Link href="">here</Link>. */}
            <img src="/img/anotherWindow.png" alt="Another Window" className="w-full pb-2" />
            <p className="text-sm pb-2 italic">Image generated with Midjourney using the prompt "airplane window view of earth from space. --ar 16:9 --v 5.1 - Image #2"</p>
            <AgentChat
                color="e"
                name="Me:"
            >
                You will be writing a short story science fiction in the first person. The narrator is a young boy who is being sent off to a spaceship that is dedicated to flat earther conversion therapy. The young boy has a name, give him a name. Describe his internet experiences with the concept of flat earth and why he passionately thinks the earth is flat. Make it humorous and believable. Now describe how he is looking outside of the spaceship and sees the earth from the window. Describe the complex feelings he has and he still wonders if there is a simulation involved somehow. Is it all a scheme of brainwashing? Are the windows rigged with high-fidelity screens that only project the earth as a sphere? Next he is taken with a group of other people, mostly older men and women, to the drop station where they get dressed in space suits and are flung out from the ship towards the earth and float there. Describe how he feels being flung out.
            </AgentChat>
            <AgentChat
                color="d"
                name="GPT-3:"
            >
                My name is Oliver, and I am twelve years old. Most kids my age are into video games, hoverboards, or the newest holo-series, but not me. No, I am different. I have a secret obsession. I am a flat-earther. It all started when I stumbled upon a video online titled "The Earth is FLAT! Mind-Blowing Proof!" Intrigued, I watched it and found myself falling into a rabbit hole of conspiracy theories, secret societies, and virtual reality simulations.<br /><br />

                I quickly became the youngest member of the "Flat Earth Society 2.0," an online group of individuals who shared their thoughts, research, and memes, vehemently arguing against the spherical Earth. We were united in our quest for truth, exchanging stories about the lies we've been told and how we'd prove everyone wrong one day.<br /><br />

                I never thought my parents would find out. They did, and they were horrified. They decided I needed help and signed me up for a controversial therapy: The Flat Earther Conversion Program. And that's how I found myself here, on a spaceship hurtling towards the upper atmosphere, supposedly to witness the truth with my own eyes.
                <br /><br />
                As the spaceship ascended, I pressed my face against the window, my heart pounding. Before me, the Earth's curve began to reveal itself. I felt a strange mixture of awe, betrayal, and confusion. Could it really be? Was everything I believed in just a figment of my imagination?<br /><br />

                But then, a thought crossed my mind. What if this was all an elaborate ruse? Perhaps the windows were rigged with high-fidelity screens that projected a spherical Earth. I couldn't help but smile at the thought of such an intricate plan to brainwash us. Those sneaky bastards.
                <br /><br />
                Our group, consisting of older men and women with varying degrees of stubbornness, was led to the drop station. One by one, we were dressed in space suits and secured to a tether before being flung out of the ship. My turn came, and as I hurtled towards the Earth, I felt a surreal calm envelop me. There I was, floating in space, the Earth's curve visible and undeniable.
                <br /><br />
                Yet, a small part of me still clung to the idea of a grand simulation, secretly hoping that my flat Earth theories were still valid. My thoughts were a swirling mix of skepticism, wonder, and uncertainty. Was the Earth truly round, or was this all just another layer in the web of lies? There was no way to be sure.
                <br /><br />
                As I hung there, suspended between truth and fiction, I couldn't help but chuckle. I, Oliver, the twelve-year-old flat-earther, had managed to find a way to doubt even the most extraordinary of experiences. In that moment, I realized that perhaps the truth wasn't what mattered most, but the journey towards it - no matter how absurd it might be.
            </AgentChat>
            <AgentChat
                color="e"
                name="Me:">
                re-write the last two paragraphs to be less didactic and moralistic. Make timmy question in a poetic and concise way, asking questions and ending with a sharp paradox.
            </AgentChat>
            <AgentChat
                color="d"
                name="GPT-3:">
                Our group, a motley crew of older men and women who held tightly to their convictions, was led to the drop station. One by one, we were dressed in space suits and secured to a tether before being flung out of the ship. As I hurtled towards the Earth, I found myself suspended in a limbo of doubt and enchantment.
                <br /><br />
                Yet, as I floated in the vastness of space, the Earth's curve undeniable, a seed of skepticism took root in my mind. Was the Earth truly round, or was this another illusion crafted to deceive us? I pondered the enigma, my thoughts weaving intricate patterns of questions and contradictions.
                <br /><br />
                Could the truth be both flat and round, a cosmic riddle reflecting our own complexities? Perhaps the Earth's shape was less significant than the dance between belief and disbelief, the eternal quest for understanding. In the silent abyss, I marveled at the paradox, my heart bursting with the poetry of uncertainty.
            </AgentChat>
            <AgentChat
                color="e"
                name="Me:">
                Come up with a more clever name for the conversion program
            </AgentChat>
            <AgentChat
                color="d"
                name="GPT-3:">
                And that's how I found myself here, on a spaceship hurtling towards the upper atmosphere, enrolled in the controversial therapy: The Planetary Perspective Adjustment Program.
            </AgentChat>
            <AgentChat
                color="e"
                name="Final Draft:"
                isInit
            >
                My name is Oliver, and I am twelve years old. Most kids my age are into video
                games, hoverboards, or the newest holo-series, but not me. No, I am different. I
                have a secret obsession. I am a flat-earther. It all started when I stumbled upon a
                video online titled "The Earth is FLAT! Mind-Blowing Proof!" Intrigued, I watched it
                and found myself falling into a rabbit hole of conspiracy theories, secret societies,
                and virtual reality simulations.<br /><br />
                I quickly became the youngest member of the "Flat Earth Society 2.0," an online
                group of individuals who shared their thoughts, research, and memes, vehemently
                arguing against the spherical Earth. We were united in our quest for truth,
                exchanging stories about the lies we've been told and how we'd prove everyone
                wrong one day.
                <br /><br />
                I never thought my parents would find out. They did, and they were horrified. They
                decided I needed help and signed me up for a controversial therapy: The Planetary
                Perspective Adjustment Program. And that's how I found myself here, on a
                spaceship hurtling towards the upper atmosphere, supposedly to witness the truth
                with my own eyes. As the spaceship ascended, I pressed my face against the
                window, my heart pounding. Before me, the Earth's curve began to reveal itself. I
                felt a strange mixture of awe, betrayal, and confusion. Could it really be? Was
                everything I believed in just a figment of my imagination?
                <br /><br />
                But then, a thought crossed my mind. What if this was all an elaborate ruse?
                Perhaps the windows were rigged with high-fidelity screens that projected a
                spherical Earth. I couldn't help but smile at the thought of such an intricate plan to brainwash us. Those sneaky bastards.
                <br /><br />
                Our group, a motley crew of older men and women who held tightly to their
                convictions, was led to the drop station. One by one, we were dressed in space
                suits and secured to a tether before being flung out of the ship. As I hurtled towards the Earth, I found myself suspended in a limbo of doubt and enchantment. Yet, as I floated in the vastness of space, the Earth's curve undeniable, a seed of skepticism took root in my mind. Was the Earth truly round, or was this another illusion crafted to deceive us?
                <br /><br />
                Perhaps the Earth's shape was less significant than the dance between belief and
                disbelief, the eternal quest for understanding. In the silent abyss, I marveled at the paradox, full of uncertainty.
            </AgentChat>
        </div>
    )
}

export default anotherWindow