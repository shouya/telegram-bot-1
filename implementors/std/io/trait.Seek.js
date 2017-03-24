(function() {var implementors = {};
implementors["buf_redux"] = ["impl&lt;R:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Seek.html' title='std::io::Seek'>Seek</a>, Rs:&nbsp;<a class='trait' href='buf_redux/strategy/trait.ReadStrategy.html' title='buf_redux::strategy::ReadStrategy'>ReadStrategy</a>, Ms:&nbsp;<a class='trait' href='buf_redux/strategy/trait.MoveStrategy.html' title='buf_redux::strategy::MoveStrategy'>MoveStrategy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Seek.html' title='std::io::Seek'>Seek</a> for <a class='struct' href='buf_redux/struct.BufReader.html' title='buf_redux::BufReader'>BufReader</a>&lt;R, Rs, Ms&gt;",];
implementors["hyper"] = [];
implementors["libc"] = [];
implementors["mime_guess"] = [];
implementors["multipart"] = ["impl&lt;R, Rs, Ms&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Seek.html' title='std::io::Seek'>Seek</a> for <a class='struct' href='buf_redux/struct.BufReader.html' title='buf_redux::BufReader'>BufReader</a>&lt;R, Rs, Ms&gt; <span class='where fmt-newline'>where Ms: <a class='trait' href='buf_redux/strategy/trait.MoveStrategy.html' title='buf_redux::strategy::MoveStrategy'>MoveStrategy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Seek.html' title='std::io::Seek'>Seek</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs: <a class='trait' href='buf_redux/strategy/trait.ReadStrategy.html' title='buf_redux::strategy::ReadStrategy'>ReadStrategy</a></span>",];
implementors["openssl"] = [];
implementors["phf"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
