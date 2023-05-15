aes = function(e, t) {
  return {
    encrypt_msg: o.AES.encrypt(o.enc.Latin1.parse(t), o.enc.Latin1.parse(e), {
      padding: o.pad.ZeroPadding,
      iv: o.enc.Latin1.parse(e),
      mode: o.mode.ECB
    }).ciphertext.toString(o.enc.Hex),
    msg_len: t.length
  }
}
