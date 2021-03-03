import React from "react";

const Toc = () => {
  return (
    <div className="p-1">
      <h4>Table of Contents</h4>
      <ul>
        <li>Introduction: A word about PGP</li>
        <li>PGP: A Brief History</li>
        <li>1) Installing the PGP Software</li>
        <li>2) Creating your Public and Private Keys</li>
        <li>3) Changing your Passphrase</li>
        <li>4) Using Your Public Key</li>
        <li>5) Using PGP to Send & Receive E-mails</li>
        <li>6) PGP Signing Your Unencrypted E-mails</li>
        <li>7) Signing Someone Else's Public Key</li>
        <li>8) Using PGP to Encrypt Your Personal Docs</li>
        <li>9) Using PGP to Wipe files from your disks</li>
        <li>10) Useful PGP Options you should know about</li>
        <li>Acknowledgements</li>
      </ul>
    </div>
  );
};

export default Toc;
