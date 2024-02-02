import React from 'react';
import MeChat from '@/components/MeChat';
import GptChat from '@/components/GptChat';

const CreativeReference = () => {
  return (
    <div>
      <h1 className="font-sans font-bold text-2xl pb-6">Visualization for Creative Reference</h1>
      <h2 className='font-sans text-sm pb-4' >This example shows the prompting process of knowledge generation, prompt-chaining, iterative refinement, and a cross-modal process between text-based information and image generation. It can be used to generate reference and mood board material for creative practices.</h2>
      <MeChat
        message="Generate a comprehensive list of the plants native to Fynbos, Cape Town"
      />
      <GptChat
        message=" "
        htmlContent="<h1>Plants Native to Fynbos, Cape Town</h1>
        <h2>Proteaceae Family</h2>
        <ol>
          <li>King Protea (Protea cynaroides): The national flower of South Africa.</li>
          <li>Silver Tree (Leucadendron argenteum): A striking silver-leaved tree.</li>
          <li>Pin Cushion Protea (Leucospermum spp.): Known for their unique flower heads.</li>
        </ol>

        <h2>Ericaceae Family (Heaths)</h2>
        <ol>
          <li>Cape Heath (Erica spp.): Over 600 species, with a variety of colors and forms.</li>
          <li>Erica verticillata: Previously extinct in the wild but reintroduced.</li>
        </ol>

        <h2>Restionaceae Family (Cape Reeds)</h2>
        <ol>
          <li>Restio spp.: Resemble grasses or sedges, important structural plants in Fynbos.</li>
        </ol>
        <p><i>...list continues...</i></p>"
      />
      <MeChat
        message="The images you generate will have a 2:3 aspect ratio. Make them photorealistic. First, generate an image of the first plant listed in the Proteaceae Family. When you are done, ask me if I want to continue generating images."
      />
      <GptChat
        message="Here is the image of the King Protea (Protea cynaroides) in a 2:3 aspect ratio. Would you like to continue generating images for the other plants in the Proteaceae Family?"
        imageUrl="/img/kingProtea.png"
      />
      <MeChat
        message="Yes"
      />
      <GptChat
        message="Here is the image of the Silver Tree (Leucadendron argenteum) in a 2:3 aspect ratio. Would you like to continue with the next plant, the Pin Cushion (Leucospermum spp.)?"
        imageUrl="/img/silverTree.png"
      />
      <MeChat
        message="Yes"
      />
      <GptChat
        message="Here is the image of the Pin Cushion (Leucospermum spp.) in a 2:3 aspect ratio. Would you like to continue with more images, or is there something else you need assistance with?
        "
        imageUrl="/img/pinCushion.png"
      />
      <MeChat
        message="Take the last three generated photos and integrate these flowers into a generated ecosystem. 16:9 aspect ratio.
        "
      />
      <GptChat
        message="The generated image represents an integrated ecosystem featuring the King Protea (Protea cynaroides), the Silver Tree (Leucadendron argenteum), and the Pin Cushion (Leucospermum spp.) in a natural fynbos landscape, all in a 16:9 aspect ratio.
        "
        imageUrl="/img/flowerCombined.png"
      />
    </div>
  );
};

export default CreativeReference;