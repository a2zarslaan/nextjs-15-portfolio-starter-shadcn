import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
                <p className="text-muted-foreground mb-8">Page not found</p>
                <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
}