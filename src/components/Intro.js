import React from "react";

const Intro = () => {
  return (
    <div className="p-1">
      <h4>Introduction: A word about PGP</h4>

      <p>
        You may already know that encryption is the process whereby codes are
        used to attempt to conceal the meaning of a message. PGP (Pretty Good
        Privacy) is a digital data encryption program created by Phil
        Zimmermann, a special director of Computer Professionals for Social
        Responsibility (CPSR) from 1997-2000. He created PGP to promote
        awareness of the privacy issue in a digital age. Protecting one's
        privacy is nothing new. It has, however, become more urgent today
        because of the ease with which digital data (information in databases,
        e-mail, and so forth) can be accessed, intercepted and monitored. It is
        also not unusual for sensitive information, transmitted or stored in
        digital form, to accidentally become public knowledge. Once data is in
        digital form, it's a bit like a greased pig. You can get your hands on
        it, but you can't hold onto it because digital data is so easily
        duplicated and shared. This is why more and more organizations are
        looking to encrypt all their information.
      </p>
      <p>
        Private individuals should think seriously about doing the same thing.
        The fact that you're reading this tutorial indicates that you agree. A
        little paranoia is not a bad thing; it makes sense to take whatever
        means are available and within reason to protect yourself from people
        prying into your private affairs.
      </p>

      <p>
        A word of warning to beginners to encryption. The PGP program,
        notwithstanding its user-friendly graphical user interface, may take
        some getting used to here and there. At the USENIX Security Symposium in
        1999, Alma Whitten & J. Tygar published a paper entitled "Why Johnny
        Can't encrypt" in which they point out some of the usability problems
        associated with the software. The paper is available at
        www.sims.berkeley.edu/~alma
      </p>

      <p>
        With this in mind, our tutorial aims to help you get over the initial
        hurdles at least so you can be up and running using the software without
        much difficulty. The features of PGP introduced in this tutorial are all
        you need to know to use the program to protect your privacy in the
        normal run of affairs. But bear in mind that to become a power user of
        PGP--one who takes advantage of the full suite of encryption
        protections--you will need to invest some time in reading the Manual
        that accompanies the program. The Manuals for each version of PGP can be
        downloaded from the PGP International web site at
        http://pgpi.didisoft.com/guide/.
      </p>
    </div>
  );
};

export default Intro;
