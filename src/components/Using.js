import React from "react";
import { Image } from "react-bootstrap";
import pgp from "./pgptrayicon.gif";

const Using = () => {
  return (
    <div className="p-1">
      <div>
        <h4>Distributing your Public Key</h4>
        <p>
          When you want to exchange Public Keys with a particular individual or
          group of individuals with whom you intend to exchange encrypted
          information, the best way to do this is to send it as an e-mail to
          whoever you want to have it. Read what follows carefully, however, so
          you understand how PGP works.
        </p>
        <p>
          The recipient of your Public Key will have to have PGP installed on
          their own computer if they want to be able to add your Public Key to
          their keyring and use it to encrypt the data they want to send you.
          Likewise, you must have anyone else's Public Key on your keyring in
          PGPKeys if you want to send them encrypted data. This is a bit tricky
          to understand at first, but think about it. Anyone who uses PGP has
          two keys, a Public Key and a Private Key. Your Public Key is used by
          other people to encrypt information they want to send you so no one
          else but you can know what the information contains. When you receive
          an encrypted message from someone (could be any kind of data, not just
          text), you use your Private Key to decrypt it. The neat thing is that
          you're the only person who can decrypt the secret message because
          you're the only person who has the Private Key, with the passphrase
          that unlocks it (unless you share your Passphrase and Private Key with
          someone else, which would defeat the purpose of PGP!).
        </p>
        <p>
          If you want to, you can put your Public Key on one or more servers
          that form an international server chain. Effectively, this makes your
          Public Key available to anyone anywhere who would like to exchange
          secure communications with you. Step 6 below explains how to do this.
        </p>
        <p>
          To include your Public Key in an e-mail message, here's all you do:
        </p>
        <ol>
          <li>
            Open PGPkeys by selecting Start/Programs/PGP/PGPkeys or by clicking
            again on the PGPtray icon PGPtray icon in the lower right corner of
            your screen and selecting PGPkeys in the pop up menu.
          </li>
          <li>
            Locate your keypair among the list of keys in the dialog box and
            select it (by clicking once on it). Then copy it (Edit/Copy or
            control-C)
          </li>
          <li>
            Start a new message in your e-mail editor, in the To: box enter the
            e-mail address of the recipient, and type a subject header such as
            "My Public Key"
          </li>
          <li>
            Now click to put the cursor in the body of the e-mail, Paste your
            Public Key (Edit/Paste or control-V) into the body of the e-mail,
            and send it.
          </li>
        </ol>
      </div>

      <div>
        <h4>Making your Public Key available through a certificate server</h4>
        <p>
          It's a good idea eventually to place your Public Key(s) on what's
          called a public certificate server. This is a server where anyone can
          access your Public Key and use it to send you encrypted messages.
          You'll still be the only one who can decrypt the message because you
          alone have the Private Key, so you never need worry that your privacy
          will be compromised just because you made your Public Key public.
          After all, that's why it's called a Public Key. However, as a beginner
          to PGP, you may not want to do this right away, since you may well
          decide to change your Public Key at a later date for one reason or
          another. The thing is that, once you put your Public Key on a
          certificate server, you can't remove it--ever, and there's no point
          littering the server with keys that are never going to be used. So
          keep this section of the tutorial in mind for later, after you've got
          used to using the program and have settled into using a particular
          Public Key.
        </p>
        <p>
          Here, then, are the simple steps to make your Public Key available
          through the certificate server at MIT. It doesn't matter which server
          you post your Public Key to, by the way, since they are all
          interlinked. Wherever you post your Public Key, it will be available
          worldwide.
        </p>

        <ol>
          <li>
            Start by connecting to the internet, so that PGP can access the web
            site (in our case a server at MIT) where your Public Key can be sent
            and included in the database of Public Keys.
          </li>
          <li>
            Open PGPkeys by selecting Start/Programs/PGP/PGPkeys or by clicking
            on the PGPtray icon PGPtray icon <Image src={pgp} roundedCircle />{" "}
            in the lower right corner of your screen and selecting PGPkeys in
            the pop up menu.
          </li>
          <li>
            In the PGPKeys window, among the list of keys you see there, click
            on the icon representing your Public Key. This is the key you want
            to post to the certificate server at MIT.
          </li>
          <li>
            Now pull down the Server menu, select Send to and then select the
            link to the MIT server at http://pgpkeys.mit.edu:11371.
          </li>
          <li>
            PGP will now access the server for you and post your Public Key
            there. When it's done, it'll inform you that the key was posted
            successfully.
          </li>
        </ol>
      </div>
      <div>
        <h4>Obtaining and Adding someone else's Public Key to your keyring</h4>
        <p>
          Once again this is simple enough. There are two ways to do this. You
          can either have someone send you their key in an e-mail and then paste
          it into your keyring from their e-mail or, if they have their key
          already posted to a certificate server, you can go get it yourself.
          Here is all you do if you get someone's public key in an e-mail:
        </p>
        <ol>
          <li>
            First you tell your friend or friends to follow Step 5 above to send
            you their Public Key in an e-mail message.
          </li>
          <li>
            Open the e-mail message containing the Public Key you wish to add to
            your keyring.
          </li>
          <li>
            Drag to select from -----BEGIN PGP PUBLIC KEY BLOCK----- all the way
            down to -----END PUBLIC KEY BLOCK-----.
          </li>
          <li>Then copy it (Edit/Copy or control-C)</li>
          <li>
            Open PGPkeys by selecting Start/Programs/PGP/PGPkeys or by clicking
            again on the PGPtray icon in the lower right corner of your screen
            and selecting PGPkeys in the pop up menu.
          </li>
          <li>
            In the PGPkeys window, paste the Public Key you wish to add to your
            keyring (Edit/Paste or control-V).
          </li>
        </ol>
        <p>
          Voila! Check the keys in your keyring to verify that the new key has
          been added to the list.
        </p>
        <p>
          If your friend or friends have a Public Key (or Keys) already posted
          to a certificate server, you can go get it yourself. Here are the
          steps to do this:
        </p>
        <ol>
          <li>
            Open PGPkeys by selecting Start/Programs/PGP/PGPkeys or by clicking
            on the PGPtray icon PGPtray icon <Image src={pgp} roundedCircle />{" "}
            in the lower right corner of your screen and selecting PGPkeys in
            the pop up menu.
          </li>
          <li>Pull down the Server menu and select Search.</li>
          <li>
            In the search dialog box, type the name of the person whose key you
            are looking for and hit OK. PGP will go to the international
            certificate server and find the key or keys for you (many people
            have more than one Public Key on the certificate server). If a
            Public for your friend exists on the certificate server, you'll soon
            see it displayed on your screen.
          </li>
          <li>
            Click on the Public Key you want so as to highlight it, and then
            copy it (Edit/Copy or control-C).
          </li>
          <li>
            Go back to your PGPkeys window where you see all the keys on your
            keyring. If one of the keys is highlighted by default, click
            anywhere off the list of keys to make sure no key is currently
            selected.
          </li>
          <li>
            Finally, in the PGPkeys window, paste the Public Key you wish to add
            to your keyring (Edit/Paste or control-V).
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Using;
