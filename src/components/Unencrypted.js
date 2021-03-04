import React from "react";

const Unencrypted = () => {
  return (
    <>
      <div className="p-1">
        <h4>PGP Signing your own unencrypted e-mails</h4>
        <p>
          Sometimes you won't want to use encryption when communicating. For
          example, when contributing to a listserv, posting notes that are
          shared with a community of folks where you can't be sure every member
          is using encryption, you won't encrypt your posting. But you can sign
          your posting with your PGP encrypted signature which any other PGP
          user will be able to verify as a way of ensuring that the note is
          genuinely sent by you. This notion of providing added assurance about
          the source of communication is part of what is known as the "Web of
          Trust", where people carefully validate/verify and sign each others'
          Public Keys so that others can find reassurance that the originator of
          an e-mail is who he or she appears to be. You can read more about this
          concept at http://www.rubin.ch/pgp/weboftrust.en.html where Patrick
          Feisthammel provides a fuller explanation along with an encouragement
          for all users of PGP to sign each others' keys. The concept of the Web
          of Trust is further explained by Hal Finney at
          http://www.sandelman.ottawa.on.ca/spki/html/1996/spring/msg00120.html.
          For now, here are the simple steps to sign your own unencrypted mail.
        </p>
        <ol>
          <li>
            After you have finished writing your message or e-mail, right click
            on the PGPtray icon PGPtray icon in the lower right corner of your
            screen, then in the pop up menu choose Current Window/Sign. The
            message is fed into a routine called a HASH Function (a function
            that converts one string of characters into a fixed length string).
          </li>
          <li>
            You will be prompted to enter your Passphrase (unless you have
            selected the option for PGP to recall your Passphrase from what's
            called the "cache"--which is not a good idea unless you know what
            you're doing (see Step 14), so for the time being we'll assume that
            you will be prompted to enter your Passphrase). In Step 14 you'll
            learn how to extend the time that your Passphrase is kept in the
            cache, along with warnings about how you should clear the cache when
            you leave your computer unattended for any period of time.
          </li>
          <li>Go ahead and type your Passphrase and hit OK.</li>
        </ol>
        <p>
          That's all there is to signing your unencrypted e-mails.
          Unfortunately, signing your unencrypted mail does not, in and of
          itself, reliably guarantee to the receiver of your note that you are
          who you say you are, so you should have your Public Key signed by at
          least one other trusted person who trusts you and can bear witness to
          your integrity within the context of the Web of Trust. This signing
          links your "real world"/"Offline" identity with your
          "Electronic"/"Online" persona. So long as all messages are signed with
          the same key, that (even in the absence of any other signatures) is
          enough "proof" of electronic identity.
        </p>
        <p>
          The signing is only needed if you need to do the real world linking.
          The Signing of an Email serves an additional purpose beyond showing
          that the message was written by the owner of the key, namely that the
          message has not been altered between the time the owner signed it and
          the time you verify the signature. So long as the Signature verifies,
          you know that the message has not been altered. The verification also
          shows when the message was signed; thus it shows the latest time that
          it could have been written. This is only in theory since there is no
          way to prove the validity of the time stamp. In other words: Was the
          user's computer set to the correct time and what time zone were they
          in?. When the proof of the accuracy of the time of creation is
          important, there needs to be some external function applied (such as a
          Digital Notary signing the message or Digital Signature). Ways in
          which this can be done is beyond the scope of this tutorial. The
          actual signing process works as follows:
        </p>
        <ul>
          <li>
            The message is fed into a routine called a HASH Function (a function
            that converts one string of characters into another), that produces
            a string that represents the contents of the message (called a
            Message Digest). Any change in the formatting of the message (such
            as moving a letter/word between the end of one line to the start of
            the next) is enough to create a different string. Thus, altering the
            actual contents and not just its formatting will also generate a
            different Message Digest.
          </li>
          <li>
            The Message Digest (along with the time stamp and some other control
            information) is then encrypted with the Sender's Private Key to
            create the Digital Signature which is placed after the message text.
            In an encrypt&sign operation, it is this signed text not just the
            message which is encrypted.
          </li>
          <li>
            Upon receipt (or after decrypting, if the message is not clear
            signed but was encrypted&signed), the Digital Signature is then
            decrypted with the recipient's Public Key (remember that Encryption
            with a Private Key allows Decrypting with the corresponding Public
            Key) to recover the Message Digest.
          </li>
          <li>
            The message itself is then fed through the Hash Function to produce
            another Message Digest.
          </li>
          <li>
            If the two Message Digests match, this proves not only that the
            message has not been altered but that it was signed by the Key Owner
            (otherwise the decrypt of the Signature would not have recovered the
            correct Message Digest [and control information] to compare with the
            newly created copy).
          </li>
        </ul>
        <p>
          Warning: After you do the Verify Step, the message will be altered to
          contain a block of text that shows the status of the verify operation.
          You will be offered the chance to replace the received signed (or
          encrypted and signed) copy with the verified copy. Do NOT do this
          replace if you want to be able to show that the text was not altered
          AFTER receipt and verification. Leaving it in its (Encrypted and)
          Signed/Un-Verified form allows you to Re-verify it anytime you need
          to.
        </p>
        <p>This is a sample of what a Clear Signed Message looks like:</p>
        <code>
          -----BEGIN PGP SIGNED MESSAGE----- Hash: SHA1 This is a sample of a
          clear signed message. Note that it can be read even if you do not have
          PGP or verify the signature. Doing the Verify is only needed if you
          want to verify that it was written by who it claims to be from and/or
          that it has not been altered after being signed. -----BEGIN PGP
          SIGNATURE----- Version: PGP Personal Privacy 6.5.8
          iQA/AwUBOzJwnqexToEmyL9hEQLCPACePdnPEau8VKKcxsD78ysTlWbgHFUAmwZe
          mx/Q+qWDRsftiGGjeImc4tjL =cFLq -----END PGP SIGNATURE-----
        </code>
        <p>
          And this is what the clear signed message looks like after being
          verified:
        </p>
        <code>
          *** PGP Signature Status: good *** Signer: Robert A. Rosenberg
          bob.rosenberg@digitscorp.com *** Signed: 6/21/01 at 18:09 ***
          Verified: 6/21/01 at 18:11 *** BEGIN PGP VERIFIED MESSAGE *** This is
          a sample of a clear signed message. Note that it can be read even if
          you do not have PGP or verify the signature. Doing the Verify is only
          needed if you want to verify that it was written by who it claims to
          be from and/or that it has not been altered after being signed. ***
          END PGP VERIFIED MESSAGE ***
        </code>
      </div>
    </>
  );
};

export default Unencrypted;
