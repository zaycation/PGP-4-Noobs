import React from "react";

const History = () => {
  return (
    <div className="p-1">
      <h4>Where did PGP come from?</h4>

      <p>
        Rarely does anything of significance arise out of the blue. PGP (Pretty
        Good Privacy) is the culmination of a long history of cryptographic
        discoveries. Cryptography is the science of writing messages in secret
        codes. It is nothing new. Since the human race became a species of its
        own, we have pondered the challenge of concealing our communications
        from others. Secrecy--stealth--is not a preserve of the human species.
        It is a matter of survival for all our brothers, sisters and cousins in
        the animal world from which we have evolved. Whether in times of peace
        or in times of war, we all harbor secret thoughts, feelings, desires,
        objectives, and so forth that we want to share only with those we
        absolutely trust, and that we want to carefully conceal from those who
        would take advantage of us if they knew what we had in mind.
      </p>

      <p>
        Encryption makes this possible, and one of the strongest encryption
        tools available to us today is PGP.
      </p>

      <p>
        Phil Zimmermann invented PGP because he recognized that cryptography "is
        about the right to privacy, freedom of speech, freedom of political
        association, freedom of the press, freedom from unreasonable search and
        seizure, freedom to be left alone." You can read Phil Zimmermann's
        fuller explanation as to why you need PGP. In the development of PGP,
        Zimmermann was greatly assisted by his knowledge of the long history of
        cryptography. Like Sir Isaac Newton, Zimmermann was able to achieve what
        he achieved because he "stood on the shoulders of giants" who went
        before him.
      </p>

      <h4>How does PGP work?</h4>

      <p>
        OK, here goes; put your thinking cap on... If this gets overly technical
        for you, and your eyes start to glaze over, don't worry about it. It's
        nice if you can understand what's going on with Public and Private Key
        encryption, but it's not necessary right away. You'll understand it
        better as you start to use it and as you interact with others who use it
        and can explain what's going on. For now, it's sufficient to just follow
        the sets of numbered steps carefully in order to learn the skills
        required to use PGP. But read over what follows and understand it as
        best you can.
      </p>

      <p>
        When you have successfully completed Step 3 of this tutorial, you'll
        have created two keys to lock and unlock the secrets of your encoded
        information. A key is a block or string of alphanumeric text (letters
        and numbers and other characters such as !, ?, or %) that is generated
        by PGP at your request using special encryption algorithms.
      </p>

      <p>
        The first of the two keys you'll create is your Public Key, which you'll
        share with anyone you wish (the tutorial also will show you how you can
        put your Public Key on an international server so that even strangers
        could send you encrypted data if they wanted). Your Public Key is used
        to encrypt--put into secret code--a message so that its meaning is
        concealed to everyone except you
      </p>

      <p>
        Then there is your Private Key, which you'll jealously guard by not
        sharing with anyone. The Private Key is used to decrypt--decode--the
        data (messages and so forth) that have been encrypted using your Public
        Key. This means that the message encrypted (encoded) using your Public
        Key can only be decrypted (decoded) by you, the owner of the
        corresponding Private Key.
      </p>
      <p>
        The designation of one of the two keys (Key1, say) as Public and the
        other (Key2) as Private is purely arbitrary since there is no functional
        difference between the two. PGP chooses one to act as the Public Key and
        designates the other as the Private Key. If it chooses to designate them
        in the other order (Public=Key2 and Private=Key1), it would make no
        difference. This is because when either key is used to encrypt
        something, the other will act as the corresponding decrypting key to
        convert the encrypted data back into its original form. This capability
        is at the heart of the "Signing" process mentioned in Steps 8 through 10
        below.
      </p>
      <p>
        Public and Private Key encryption solves one of two major problems with
        older methods of encryption, namely that you had to somehow share the
        key with anyone you wanted to be able to read (decrypt) your secret
        message. The very act of sharing the key meant that some untrustworthy
        so-and-so could intercept it--and frequently did. Which meant your code
        was practically useless.
      </p>

      <p>
        The second major problem with older methods of encryption was the
        relative ease with which the code could be broken. Codes have to be
        incredibly complex if they're to foil the attempts of astute humans to
        crack them. This is all the more the case today when we have
        increasingly powerful computers to do the dirty, "brute force," work of
        trying every conceivable combination of key possibilities for us. PGP,
        and other similar encryption systems, use a key that is
        really--well--astronomically large, meaning that the number of binary
        bits (1s and 0s) used to create it has an astronomically large number of
        possible combinations and the actual decimal (base 10) value they
        represent is--well--huge. Unlike earlier encryption methods, the
        security of PGP encryption lies entirely with the key. Earlier
        encryption methods relied on "security through obscurity" (ie: keeping
        secret the method used to do the encryption). The methods used to do PGP
        encryption are known and documented. It is PGP's selection of the
        complex keys used to do an encryption that makes it next to impossible
        to crack.
      </p>

      <p>
        The size of the key can be increased whenever necessary to stay one step
        ahead of advances in technology. Time alone will tell if PGP can stand
        the test of time, but for now it's one of the best encryption
        technologies you'll find.
      </p>

      <p>
        If you would like to read the history of encryption and understand the
        origins of Zimmermann's PGP program, an excellent account is given in
        Simon Singh's CODE BOOK (Doubleday, New York, NY, 1999). Find out more
        about PGP at the International PGP home page. The CryptoRights
        Foundation is another good website for information regarding privacy
        issues. You might also like to join the PGP-BASICS User group where you
        can find speedy and informed answers to questions that might arise as
        you get started using PGP. Once you're more experienced with the
        program, you can join the PGP Users Mailing List so you can keep in
        touch with issues related to privacy.
      </p>
    </div>
  );
};

export default History;
