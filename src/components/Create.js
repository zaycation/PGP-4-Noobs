import React from "react";
import { Image } from "react-bootstrap";
import pgp from "./pgptrayicon.gif";

const Create = () => {
  return (
    <div className="p-1">
      <h4>Setting up (Creating) your Public and Private PGP keys</h4>

      <p>
        Now that you have the PGP software installed on your computer, you need
        to create a Public and Private Key pair. This you can do at any time.
        Remember as you complete the steps that follow that your Public Key is
        so-called because you will willingly share it with others so that they
        can use it to send you secret information. Your Private Key is so-called
        because it alone will decode any information encoded with your Public
        Key. As long as you alone have knowledge of your Private Key, your
        privacy is assured. Here are the steps to follow:
      </p>
      <ol>
        <li>
          Open PGPkeys by selecting Start/Programs/PGP/PGPkeys or by clicking on
          the PGPtray icon PGPtray icon <Image src={pgp} roundedCircle /> in the
          lower right corner of your screen and selecting PGPkeys in the pop up
          menu.
        </li>
        <li>
          The PGPkeys window opens up, listing various people's Public Keys,
          among which in a short while will be yours and any others (your
          correspondents) that you choose to add to the list.
        </li>
        <li>
          In the PGPkeys menu bar, click on the Generate New Keypair icon
          Generate New Key Pair icon to bring up the PGP Key Generation Wizard.
          Read the introductory dialog, then click on Next.
        </li>
        <li>
          The PGP Key Generation Wizard now asks you to enter your name and
          e-mail address. Do this now. You can use any name you like and it's a
          good idea to use a genuine e-mail address so you can take advantage of
          the PGP feature which will look up the correct key for you when you
          are writing to a particular correspondent. Click Next when you're done
          entering your name and e-mail address.
        </li>
        <li>
          Now the PGP Key Generation Wizard asks you to select a key type.
          Accept the default (Diffie-Hellman/DSS) and click Next.
        </li>
        <li>
          The PGP Key Generation Wizard next asks you to specify a size for your
          new keys. Again accept the default (2048 bits, which will give you a
          key so large that it would be well nigh impossible to figure out even
          by the most powerful computer in the world) and click Next.
        </li>
        <li>
          Now the PGP Key Generation Wizard asks you when you want your key pair
          to expire. Accept the default (Key pair never expires) and click Next
          again.
        </li>
        <li>
          The PGP Key Generation Wizard now asks you to enter a passphrase.
          Think about this before you proceed. Choose a passphrase that has at
          least eight (8) characters (that's a minimum of 8 characters as a
          requirement), with a mix of upper and lowercase letters or other
          characters. The greater the mix of characters and the longer the
          passphrase, the better. As Herb Kanner explains, "The size of the
          passphrase, and the inclusion of mixed case and non-alphabetics is to
          increase the difficulty of a brute force attack on your passphrase."
          So, if you use a longer passphrase (Herb's is 15 characters long, and
          Bernie's is 33!!) even if someone used a supercomputer, it would take
          an intolerably long time for it to try all combinations till it hit on
          your passphrasse. If you'd like to read more about this important
          subject of Passphrases, take a look at The Passphrase FAQ. Arnold G.
          Reinhold's DiceWare Passphrase HomePage is another excellent resource.
        </li>
        <li>
          Enter your passphrase once you've decided what it will be, hit Tab,
          and re-enter it for confirmation. Then click Next again.
        </li>
        <li>
          If you have entered an inadequate passphrase, the PGP Wizard will warn
          you and ask you to go back and re-enter another passphrase. But if all
          is well, the PGP Key Generation Wizard will now go ahead and generate
          your key pair. You may be prompted to move your mouse around or hit
          random keys on the keyboard to help the Wizard create a more secure
          key. Click Next when the Wizard has finished generating your key.
        </li>
        <li>
          You'll now be asked if you want to send your new Public Key to a
          server where others around the globe can find it and use it when they
          want to encrypt data they wish to send you. This is optional, so click
          in the box only if you wish to do this, then click on Next once more.
        </li>
      </ol>
      <p>
        That's it! You're done creating your PGP Public and Private Keys. Now
        all you have to do is share your Public Key with anyone with whom you
        wish to exchange secure information. The next sections tell you how to
        do this, and how to use your key and those of your correspondents to
        encrypt and decrypt the data that you exchange.
      </p>
    </div>
  );
};

export default Create;
