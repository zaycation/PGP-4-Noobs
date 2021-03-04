import React from "react";

const Emails = () => {
  return (
    <>
      <div className="p-1">
        <h4>
          Using the PGP encryption software to send (encrypt and sign) and
          receive (decrypt) secure e-mails
        </h4>
        <p>
          You are ready now to start using the PGP program to generate secure,
          encrypted digital information. In this section you'll learn how to
          encrypt messages or other data before you send them, and how to
          decrypt messages or other data that you have received. First, the
          encryption process.{" "}
        </p>
        <ol>
          <li>
            Compose the e-mail you want to send in whatever natural language you
            want to use (French, English, Spanish, German, etc.).
          </li>
          <li>
            When you have finished composing the e-mail, make sure the cursor is
            still somewhere in the body of your message, and click on the
            PGPtray icon in the lower right corner of your screen.
          </li>
          <li>
            In the PGPtray pop-up menu, select Current Window, then in the
            Current Window sub menu, select Encrypt & Sign. This will bring up
            the PGPtray Key Selection dialog box where you should see the list
            of Public Keys including that of the person or persons to whom you
            wish to send your message. Note: The Private Key is kept in a file
            called the Private Keyring. It is encrypted with your selected
            passphrase so even if, somehow, someone gets access to your Private
            Keyring, it will be unusable without access to the Passphrase to
            decrypt the Key for use. Every time PGP needs access to the Private
            Key (to Decrypt an Encrypted Message or to Sign an Outgoing Message
            or someone's Public Key) the Passphrase will need to be re-entered.
            By default, PGP will remember [cache] your Passphrase for two
            Minutes so that you do not have to re-enter it if needed more than
            once within this time frame. However, two minutes isn't much time
            and the odds are you'll need to re-enter your passphrase every time
            unless you change this default. Step 14 explains how to do this,
            along with warnings about how to use the cache wisely and without
            risk.
          </li>
          <li>
            Double click on the Public Key of the person to whom you wish to
            send your message (this selects the key and moves it to the
            recipients box just below). When you have made your selection, click
            on OK.
          </li>
          <li>
            You will be prompted to enter your passphrase. Type it in carefully,
            then hit OK. If you did everything correctly, the message will be
            converted to unintelligible gobbledygook (aka "ciphertext", as it's
            called in the world of cryptography). The ciphertext will look like
            the following:
          </li>
        </ol>
        <code>
          -----BEGIN PGP MESSAGE----- Version: PGP Personal Security 7.0.3
          qANQR1DBwk4DepqGz+tv7awQC/sGOyvgkqLDEz3QOc4AkDuoTVl9O2y7X260NR47
          w77OngPn3z/01yEpVDmkfrpdXKYmVhylICPg1yvNYTyx6EW5LIOYt1yuxLc+bjKS
          piwrBdCxz5+VT8z9IQz7BNu75GBP5YMJyhZUgwFRDahPITz0ziqL9nBZeUX27PGL
          ZIc32bm/18zLwbLUZi4CSPlnc9PzXTeubwnsaC0ZU1PT+WokkhPRxPrgBHLU/rMj
          zqOoh2/dXGMUFY7F0zitGw1jcj+jIf49hpzPZ5oWChZQjnQdREZgaRenx3jRomol
          BnT0KgGk+cBp8BIM65DyoYdMKE878n+ngTgIYUYkBLnYXfQv9pgagPlQUgmMWSK/
          zRkLS3PpKJFTv629iBXKKDeCteqD4668TRty3N1sEXaFbpMZtaNWJvqlXpbbrAkO
          rvKAxMq9gpA+asf6415NSX29FT4uv4D7FWF3fp2e9it8c30//9yKXQ8pJb0vfz8B
          vZCwIO1me371DScIwI2D8/8EHzQMALxye7O/tpDW3BEU+NEqsHM2nXdebKl7mPk8
          5voUyYZb3vz3PQHNJ+Jg14KybK8Jn7KGji19nHFgFtHN0Qoz4e5aTlZtMksWDaX+
          dT6xfrKBo5wOaQHGAX3NHBAMTCqUoZajsGxsc+dQ/WB7Qw4qdZjmLtzj35HcF7s0
          5RwOWZ2F9cqSj0b994llaT9zo2jXs5ZM/fAZUBPsCp55EFpe52NFKJgyJY92mYi0
          1SK26VMNMdHdp4zHWZdNkhPPG0EgDsz1g+EtY6YXWQYwIKPnQUivf5mhDdhPmWK6
          sAR4D7s2Vgqs2gQnvuFxpkDMc5l2rMTAE5+x228SpMPau27BDxBDKLw1i6ak23C+
          l2qmiqQg0qeSFy2o7+HmyKWCENl2V84N8eLhoE+iyXj5fL2UvMlqVJePTT76Rz6p
          +tD/15JYZo/8uAxIBivaB7P7k2Bqu0bmrCD4wdSKOLzhScxAj15Dtu0kWgEKGs80
          VgTMu2iQLtphN7oObhWzUIf9O3MlqMnBCiOp4VFGebnJcDvullUB4OYZD6ZLIecN
          8BsqsVlqawJbtWpmRf8973Yg2bicP0ISCwFaoDvR8C+wb3h9nJ9EZeO/mZGjJweR
          A6yXK7wyp6JHnvACwFhUkTno7nrdq8cDaG4ssolsUSKnON87ycLFWq/mNs9fhqzF
          Y3y7Q4f7hA4EL83+bxc4YGqzirWHeVXetZdft018+0Oz2Au8gRG5AVd+DX+xlr56
          mJlkrlzYWG7HuEl8CRS7rAZHgRAIV3I7WDeNEYyBQNt/MfzUQY9+BmbtCsTlOnda
          j8IkiL0QIW/9ZyvifxpvzKGKhxdXoqJWVSXLKHGk1qvY9epgw7QWk15crlti0Q4+
          aDXvNieN9imk3UNQe2rncqzIKlbxasjparCKXiErQGFjldtTLrZcf7KjNOJuVG9J
          HoOZC39ur8rkVrgWuSzrvzhpeQl0VlmdviZpocErZYPtnDQGgA3TbXX4lXoMiM1a
          bOxTskUcgIBzN2L9nNfIhVaxJxMd3260SpJxElJ27V6Be97Q+YX4TF9xlH4zWFM3
          NpGg1iXWNRb4VSwPE2+ZEiKirrlMsgXxfZNvAy3bAuSm0b1u7Isa/Jjab96DHff6 5g5K
          =WRFH -----END PGP MESSAGE-----
        </code>
        <p>
          Now send the message just as you would normally do. Next, the
          decryption process.
        </p>
        <ol>
          <li>
            Open the e-mail containing the encrypted message. All you'll see is
            unintelligible ciphertext (as shown in the examples above).
          </li>
          <li>Drag to select the block of ciphertext.</li>
          <li>
            Click once more on the PGPtray icon in the lower right corner of
            your screen.
          </li>
          <li>
            In the PGPtray pop-up menu, select Current Window, then in the
            Current Window sub menu, select Decrypt & Verify. This will bring up
            the dialog box asking you to enter your passphrase.
          </li>
          <li>
            Type your passphrase into the PGP Enter Passphrase dialog box that
            pops up on the screen, and hit OK. The decrypted message will come
            up in a new window for you to read. If you wish to keep the
            decrypted version, you can copy it and paste it into a word
            processor of your choice before saving it to disk. The decrypted
            message will look like the following (Note that the message is now
            readable and the signature has been verified):
          </li>
        </ol>
        <code>
          *** PGP Signature Status: good *** Signer: Robert A. Rosenberg
          bob.rosenberg@digitscorp.com *** Signed: 06/30/2001 at 00:51 ***
          Verified: 06/30/2001 at 00:52 *** BEGIN PGP DECRYPTED/VERIFIED MESSAGE
          *** This is a sample of what the above Encrypted&Signed message looks
          like after it has been decrypted and the signature has been
          successfully verified. Since the Public Key that was used to encrypt
          this text belongs to Robert Rosenberg, only he can decrypt the message
          to extract this message. An Encrypted&Signed message is a Clear Signed
          Message (such as the sample in Step 10 below) prior to the Encrypt
          Stage and after the Decrypt Stage. While it is possible to just
          Encrypt a message, it is usual to also sign it to prove its origin.
          *** END PGP DECRYPTED/VERIFIED MESSAGE ***
        </code>
        <p>
          That's all there is to it. To find out about the many other features
          of the PGP program, check out the Manual that was originally
          downloaded with the software. It's a .pdf file which will print out
          beautifully on your printer so you can read it at your leisure over a
          nice cup of tea :) Well, maybe you'll need something a bit stiffer to
          help you figure it all out...
        </p>
        <p>
          On a technical note: The actual encryption/decryption is NOT being
          done with the Public/Private keys of your recipient(s) but with a
          special one-time key that is generated for use in this specific
          encrypt&sign operation. Every time you do an encrypt&sign, a new
          one-time key is generated. Unlike the Public/Private key pairs where
          anything encrypted with one key needs the other key to do the decrypt,
          these one-time keys have the ability to decrypt anything that they
          encrypt (hence its being known as a Symmetric Key). When you encrypt
          any data, this one-time key is used to do the actual encryption. The
          Public key of each recipient is then used to encrypt the one-time key
          and added to the encrypted text created with the one-time key. Thus
          what results is a list of recipients with the one-time key supplied
          encrypted with each person's Public Key along with the common copy of
          the one-time key encrypted ciphertext. This format allows a message to
          be sent to multiple people at the same time yet allow each to use his
          or her own Private Key to read it. The decrypting process involves the
          recipient's PGP Program scanning the list of encrypted one-time keys
          looking for the copy that was encrypted with their Public Key. This
          copy is then decrypted with the Private key to recover the one-time
          key which then can be used to do the actual decrypting. The
          Signing/Verification actions that occur during an encrypt&sign and
          decrypt&verify are covered in Step 10 below and occur prior to the
          encryption itself and after the corresponding decrypting of the data.
        </p>
      </div>
      <div className="p-1">
        <h4>
          Using your Default Public Key to save a backup, encrypted,
          decipherable copy of all your e-mail messages
        </h4>
        <p>
          There's something you need to know right away about PGP encryption:
          once you encrypt a message using the Public Key of the person to whom
          you're sending it, you won't be able subsequently to decrypt it and
          read it yourself since you don't have your correspondent's Private
          Key. Most of the time this doesn't matter because you may not need to
          keep a copy of every message you sent. But sometimes (maybe often, if
          you consider it necessary) you want to keep your own encrypted copy of
          a message for the record and you need to be able to decrypt it, if and
          when you want to read it at a later date. The best thing to do is tell
          PGP to encrypt all your messages using your correspondent's Public Key
          as well as one of your own Public Keys (called the Default Public
          Key). Here's how you do this:
        </p>
        <ol>
          <li>
            Open PGPkeys by selecting Start/Programs/PGP/PGPkeys or by clicking
            on the PGPtray icon PGPtray icon in the lower right corner of your
            screen and selecting PGPkeys in the pop up menu.
          </li>
          <li>
            In the Edit menu select Options..., then in the Options dialog box
            make sure the General tab is selected
          </li>
          <li>
            Click to put a check mark in the small box next to Always encrypt to
            default key, then click on OK.
          </li>
        </ol>
        <p>
          That takes care of the problem of saving an encrypted copy of all your
          messages that you can readily decipher (decrypt) at a later date. Now
          for the steps you'll take to send (sign) and receive (verify) Clear
          Signed e-mails. The following section (Step 10) explains how to do
          this.
        </p>
      </div>
    </>
  );
};

export default Emails;
