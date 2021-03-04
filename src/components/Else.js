import React from "react";
import { Image } from "react-bootstrap";
import pgp from "./pgptrayicon.gif";
<Image src={pgp} roundedCircle />;

const Else = () => {
  return (
    <>
      <div className="p-1">
        <p>
          Here is a comment from a respected member of the Public Key Encryption
          community (Nick Andriash) in response to a request he received to sign
          a cyberfriend's Public Key. "With respect to signing each other's
          Public Keys," Nick replied, "I have already done so with a
          non-exportable signature, because we have been in constant
          communication, and I obtained your Public Key from your web site; I am
          confident enough in knowing the messages are coming from the same
          person at the same address... I just don't know who that person is,
          and that is why I cannot sign your Public Key with an exportable
          signature, where it will always travel with the Public Key. For that,
          I insist on face to face meetings, along with an exchange of photo ID,
          etc., as this is the only way to maintain the integrity of one's own
          Web of Trust. All of the people who have signed my Key, I have met
          personally, and that is as it should always be, unless we are
          introduced to each other by a Trusted Introducer whose signature
          appears on both our Public Keys."
        </p>
        <p>
          When you sign someone else's Public Key, you are verifying that it
          belongs to the person who claims to own it. You are stating that you
          know this individual and that the key really belongs to him or her. As
          it states in the PGP dialog box for signing a key: "By signing the
          selected user ID(s), you are certifying based on your own direct
          first-hand knowledge that the key(s) and attached user ID(s) actually
          belong to the identified user(s)." Then, before signing, you're asked
          to remember if you received the key in a secure manner (you know where
          it came from) or if you have verified the fingerprint with the owner.
          The dialog box includes the owner's fingerprint so you could, if you
          wanted to, go over the fingerprint with the owner in person ideally,
          or at the very least over the phone, just to make sure everything's
          kosher.
        </p>
        <p>
          In this way, you are able to give a key greater authenticity. Under
          normal circumstances, you may think it unnecessary to validate someone
          else's key in this way. You might even think it seems like overkill.
          But suppose someone were to masquerade as someone else (say, as you)
          and put a Public Key in that person's (or your) name on an
          internationally available certificate server. Then suppose that other
          people were to encrypt messages using that Public Key, thinking the
          message could be decrypted and read only by the person they THINK
          they're sending it to (say, you). All the masquerader has to do now is
          intercept those messages and easily decrypt them because the
          masquerader has the Passphrase and corresponding Private Key.
        </p>
        <p>
          As Nick points out above, there are two ways to sign someone else's
          Public Key. There is a non-exportable signature, which is good for
          communication between familiar friends who already know and trust each
          other informally. Then there is an exportable signature, based on
          careful, if necessary face-to-face identification and verification,
          which is a much stronger form of reassurance about the integrity of
          the owner of the Public Key.
        </p>
        <p>
          The important rule of thumb is this: Never, ever sign someone else's
          Public Key with an exportable signature UNLESS you are able to say
          categorically that you know who he or she is and have a strong
          assurance that he or she will not belie your trust. If you follow this
          rule of thumb, you will be able, over time, to build up your own
          personal Web of Trust while extending the larger, global Public Key
          encryption Web of Trust. The GNU Privacy Handbook has an excellent
          section on Trust, Validity and the concept behind the Web of Trust.
        </p>
        <p>
          Here then are the simple steps to sign someone else's Public Key.
          First as a non-exportable signature:
        </p>
        <ol>
          <li>
            Open PGPkeys by selecting Start/Programs/PGP/PGPkeys or by clicking
            on the PGPtray icon <Image src={pgp} roundedCircle /> PGPtray icon
            in the lower right corner of your screen and selecting PGPkeys in
            the pop up menu.
          </li>
          <li>
            In the list of keys in the PGPkeys window, right click on the key
            you wish to sign.
          </li>
          <li>
            In the pop up menu, select the item Sign.... Immediately PGP
            presents a dialog box which lists the key you wish to sign, along
            with its fingerprint (a long string of hexadecimal characters). The
            text in the dialog box advises you to ensure that the key you are
            about to sign was given to you in a secure manner, and if you're not
            absolutely sure, you should verify the fingerprint with the owner of
            the Public Key. At the very least, unless you are quite sure the key
            belongs to the person who owns it, you should phone the individual
            and have them repeat to you the characters of the fingerprint by way
            of validation.
          </li>
          <li>
            You'll notice a small check box next to "Allow signature to be
            exported" and you are advised that "others may rely upon your
            signature." DON'T check this box if all you want to do is add a
            non-exportable signature to the Public Key.
          </li>
          <li>
            Click on OK to complete the non-exportable signing of the Public
            Key.
          </li>
        </ol>
        <p>Then as an exportable signature:</p>
        <ol>
          <li>
            Open PGPkeys by selecting Start/Programs/PGP/PGPkeys or by clicking
            on the PGPtray icon PGPtray icon in the lower right corner of your
            screen and selecting PGPkeys in the pop up menu.
          </li>
          <li>
            In the list of keys in the PGPkeys window, right click on the key
            you wish to sign.
          </li>
          <li>
            In the pop up menu, select the item Sign.... Immediately PGP
            presents a dialog box which lists the key you wish to sign, along
            with its fingerprint (a long string of hexadecimal characters). The
            text in the dialog box advises you to ensure that the key you are
            about to sign was given to you in a secure manner, and if you're not
            absolutely sure, you should verify the fingerprint with the owner of
            the Public Key. For an exportable signature, this means literally
            meeting with the individual face-to-face and verbally and/or
            visually validating that the Public Key you wish to sign with an
            exportable signature really and truly belongs to the person to whom
            you believe it belongs. This might sound like overkill, but the fact
            is that an exportable signature has absolutely no value without this
            face-to-face guarantee.
          </li>
          <li>
            You'll notice a small check box next to "Allow signature to be
            exported" and you are advised that "others may rely upon your
            signature." For an exportable signature, check this box before you
            click OK to complete to exportable signature of the Public Key.
          </li>
        </ol>
      </div>
    </>
  );
};

export default Else;
