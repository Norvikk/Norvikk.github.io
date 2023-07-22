import React, { Component } from "react";
import Marquee from "react-fast-marquee";

class MainProject extends Component {
  render() {
    return (
      <div className=" mt-48 relative h-[300vh] md:h-[100vh]  bg-background-color font-hack font-extrabold ">
        <div className="absolute w-[99vw] text-gray-50 text-5xl">
          <div class="pt-6 mt-44 xl:mt-0 absolute w-full h-full flex justify-center items-center z-10 gap-24 flex-w flex-wrap">
            <div className=" relative w-[350px] h-[30%] xl:h-[50%] bg-[#101212] rounded-3xl shadow-2xl shadow-accent-color ">
              <div className=" flex justify-center  text-xl flex-row gap-2 bg-[#1a1d1d] rounded-t-3xl  pt-1 pb-2  italic font-bold">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rustacean-orig-noshadow.svg/1200px-Rustacean-orig-noshadow.svg.png"
                  className="w-[40px]  text-[#b7410e] "
                />
                encrypt.rs
              </div>

              <div className="text-sm md:text-lg pt-5 pl-5">
                Choose from the following{" "}
                <span className="text-red-500">→</span>
                <br />
                <span className="text-red-700">[0]:</span> Encrypt{" "}
                <span className="text-red-400">(save)</span>
                <br />
                <span className="text-red-700">[1]:</span> Decrypt{" "}
                <span className="text-red-400">(save)</span>
                <br />
                <br />
                <span className="ml-4 text-red-500">{">"}</span> Option: 0<br />
                <span className="ml-4 text-red-500">{">"}</span> To Encrypt:{" "}
                <span className=" font-bold bg-accent-color rounded-xl pt-0 pl-2 pr-2">
                  a sÄmple text
                </span>
                <br />
                <span className="ml-4 text-red-500">{">"}</span> File Directory:{" "}
                <span className="text-red-400">(root)</span>
                <br />
                <br />
                <span className=" font-bold bg-accent-color rounded-xl pt-0 pl-2 pr-2">
                  a sÄmple text
                </span>
                <br />
                Encryption Succeeded<span className="text-red-500"> !</span>
              </div>
            </div>

            <div className="flex-col gap-4 flex relative w-[350px] h-[30%] xl:h-[50%] bg-[#101212] rounded-3xl shadow-2xl shadow-accent-color ">
              <div className="flex justify-center pt-2 pb-2 text-xl flex-row bg-[#1a1d1d] rounded-t-3xl    italic font-bold">
                keys.dnk
              </div>
              <div className="text-sm md:text-lg pt-5 font-bold italic flex justify-center ">
                {'x 63eCMTFPVIKAW" 35g^Hw'}
                <br />
                {"°13h_| Ht«81fk@{«96bHFW"}
                <br />
                {'"7/hG>Au<71d}Ey 3/gMA{"'}
                <br />
                {"°9/gGyFv«<31i~Fz-8.dz@x"}
                <br />
                {"°66izUCtª 60hlGz@81c_Ez"}
                <br />
                {"©74f¹rAvª 4/eGEW° 6.f; Hw"}
                <br />
                {"¨1.i>$Fw«44i*Ewª 45bCDt"}
                <br />
              </div>
              <div
                className="relative w-[350px] h
              -[120px] mt-auto bg-[#161818] rounded-3xl "
              >
                <div className="flex justify-center  text-sm md:text-lg flex-row gap-2 bg-[#333535] rounded-t-3xl  pt-2 pb-2 italic font-bold">
                  bricked.dnk
                </div>
                <div className="text-sm md:text-lg pt-5 font-bold flex justify-center ">
                  {"ZG?MvvS'o>)M."}
                </div>
              </div>
            </div>

            <div className=" relative w-[350px] h-[30%] xl:h-[50%] bg-[#101212] rounded-3xl shadow-2xl shadow-accent-color ">
              <div className=" flex justify-center  text-xl flex-row gap-2 bg-[#1a1d1d] rounded-t-3xl  pt-1 pb-2  italic font-bold">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rustacean-orig-noshadow.svg/1200px-Rustacean-orig-noshadow.svg.png"
                  className="w-[40px]  text-[#b7410e] "
                />
                decrypt.rs
              </div>

              <div className="text-sm md:text-lg pt-5 pl-5">
                Choose from the following{" "}
                <span className="text-red-500">→</span>
                <br />
                <span className="text-red-700">[0]:</span> Encrypt{" "}
                <span className="text-red-400">(save)</span>
                <br />
                <span className="text-red-700">[1]:</span> Decrypt{" "}
                <span className="text-red-400">(save)</span>
                <br />
                <br />
                <span className="ml-4 text-red-500">{">"}</span> Option: 1<br />
                <span className="ml-4 text-red-500">{">"}</span> Path to Keys:{" "}
                <span className="text-red-400">(root)</span>
                <br />
                <span className="ml-4 text-red-500">{">"}</span> Path to
                Bricked: <span className="text-red-400">(root)</span>
                <br />
                <br />
                Decryption Successful<span className="text-red-500">
                  !
                </span>{" "}
                {"---->"} <br />
                {"->"}{" "}
                <span className=" font-bold bg-accent-color rounded-xl pt-0 pl-2 pr-2">
                  a sÄmple text
                </span>
              </div>
            </div>

            <div className="pb-6 items-center flex flex-col">
              <div className="pb-4 w-[350px] mb-2 font-bold flex flex-col ">
                Denk <span className="text-accent-color">Cipherer</span>
                <div className="text-sm text-gray-400 mt-4 bg-[#101212] shadow-lg shadow-accent-color rounded-3xl  p-4">
                  Denk_Cypherer (Denk-Algo) is a Rust-based encryption and
                  decryption program that obfuscates text using a key.
                </div>
              </div>

              <a
                className="items-center justify-center bg-[#1d1d1d] rounded-3xl w-56 h-12 text-2xl flex-row flex"
                href="https://github.com/Norvikk/Rustic_Denk"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
                <img
                  src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/external-link-512.png"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>

          <div className="mt-96 xl:mt-0">
            {lines.map((line, index) => (
              <Marquee
                key={index}
                speed={15 + 2 * index}
                className="h-16 opacity-10  blur-[4px]"
                gradient={false}
              >
                {line}
              </Marquee>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MainProject;

let lines = [
  'fn m(a:i32,b:i32)->i32{if a<1&&b<1{0}else if a<1{b}else if b<1{a}else{m(a-1,b)+m(a,b-1)}}fn main(){let result=m(4,5);println!("{}",result);}',
  "use core::panic;use inquire::validator::Validation;use std::fs::File;use std::io::prelude::;use super::process_encrypt;use super::process_encrypt::binding::{bind, BindingKey};use super::process_encrypt::key_buffering::BufferKey;use super::",
  '¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿×÷.chars().collect();for current_entry in user_plain_text.chars() {if decentralization_cancel_triggers.contains(&current_entry) {break_decentralization_process = true;println!("The given context had unstable sy',
  'decentralize(binded_encrypted_bundle.1);}match write_files_to_dir(binded_encrypted_bundle,buffered_encrypted_bundle,vanilla_encrypted_bundle.0,user_bricked_path,user_keys_path,break_decentralization_process) {Ok() => Ok(String::from("Success',
  ': bool = false;if is_burst {user_plain_text = String::from("running test: a1+#-? öäüß");(user_bricked_path, user_keys_path) = request_write_path(("bricked", "keys"), ".dnk", true)?;} else {user_plain_text = request_plain_text()?;(user_bric ',
  'fering::start(&vanilla_encrypted_bundle);let mut binded_encrypted_bundle = bind(&buffered_encrypted_bundle.1, buffered_encrypted_bundle.0[0].key.len() as i64);let decentralization_cancel_triggers: Vec<char> = "!$%€&(),./;<=>@[]^`{|}~¡¢£¤ ',
  'ss anything").prompt();Ok(user_payload?)}fn request_write_path(file_names: (&str, &str),file_format: &str,is_burst: bool) -> anyhow::Result<(String, String)> {let path;if is_burst {path = String::from("target");} else {path = inquire::Text:',
  ':n ew("File Directory: ").with_help_message("Leaving this empty writes the output to this folder where the app is located").with_placeholder("Sample: C:/Users/Administrator/Downloads").prompt()?.trim().to_owned();}if path.is_empty() {Ok(( d',
  'decentralize(binded_encrypted_bundle.1);}match write_files_to_dir(binded_encrypted_bundle,buffered_encrypted_bundle,vanilla_encrypted_bundle.0,user_bricked_path,user_keys_path,break_decentralization_process) {Ok() => Ok(String::from("Success',
  'ed_path, user_keys_path) = request_write_path(("bricked", "keys"), ".dnk", false)?;}let vanilla_encrypted_bundle = process_encrypt::key_encryption::start(&user_plain_text, size_key);let buffered_encrypted_bundle = process_encrypt::key_buf E',
  "fn flip<T>(input:&T)->String where T:AsRef<str>{let mut output=String::new();let len=input.as_ref().len();for i in 0..len{let character=input.as_ref().chars().nth(len-i-1).unwrap();output.push(character);}output}",
  "fn binary_search(arr: &[i32], target: i32) -> Option<usize> { let (mut low, mut high) = (0, arr.len()); while low < high { let mid = (low + high) / 2; match arr[mid].cmp(&target) { std::cmp::Ordering::Equal => return Some(mid), std::cmp::Order",
  'decentralize(binded_encrypted_bundle.1);}match write_files_to_dir(binded_encrypted_bundle,buffered_encrypted_bundle,vanilla_encrypted_bundle.0,user_bricked_path,user_keys_path,break_decentralization_process) {Ok() => Ok(String::from("Success',
  '[package] name = "rustic_denk" version = "0.1.0" edition = "2018" [dependencies] rand = "0.8.4" serde = { version = "1.0", features = ["derive"] } actix-web = "4.0.0-beta.13" sqlx = { version = "0.5", features = ["postgres"] } dotenv = "0.16.0" log = "0.4.14"',
];
