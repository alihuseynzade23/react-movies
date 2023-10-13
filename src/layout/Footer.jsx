function Footer() {
    return (
        <footer
            class="page-footer green lighten-2
        "
        >
            <div class="footer-copyright">
                <div class="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        class="grey-text text-lighten-4 right"
                        href="https://github.com/alihuseynzade23/react-movies"
                        target="_blank"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
