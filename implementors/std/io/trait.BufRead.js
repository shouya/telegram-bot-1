(function() {var implementors = {};
implementors["buf_redux"] = ["impl&lt;R:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>, Rs:&nbsp;<a class='trait' href='buf_redux/strategy/trait.ReadStrategy.html' title='buf_redux::strategy::ReadStrategy'>ReadStrategy</a>, Ms:&nbsp;<a class='trait' href='buf_redux/strategy/trait.MoveStrategy.html' title='buf_redux::strategy::MoveStrategy'>MoveStrategy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html' title='std::io::BufRead'>BufRead</a> for <a class='struct' href='buf_redux/struct.BufReader.html' title='buf_redux::BufReader'>BufReader</a>&lt;R, Rs, Ms&gt;",];
implementors["hyper"] = [];
implementors["lazy_static"] = [];
implementors["libc"] = [];
implementors["mime_guess"] = [];
implementors["multipart"] = ["impl&lt;R, Rs, Ms&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html' title='std::io::BufRead'>BufRead</a> for <a class='struct' href='buf_redux/struct.BufReader.html' title='buf_redux::BufReader'>BufReader</a>&lt;R, Rs, Ms&gt; <span class='where'>where Ms: <a class='trait' href='buf_redux/strategy/trait.MoveStrategy.html' title='buf_redux::strategy::MoveStrategy'>MoveStrategy</a>, R: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>, Rs: <a class='trait' href='buf_redux/strategy/trait.ReadStrategy.html' title='buf_redux::strategy::ReadStrategy'>ReadStrategy</a></span>","impl&lt;'a, B:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html' title='std::io::BufRead'>BufRead</a> for <a class='struct' href='multipart/server/struct.MultipartFile.html' title='multipart::server::MultipartFile'>MultipartFile</a>&lt;'a, B&gt;",];
implementors["openssl"] = [];
implementors["phf"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
